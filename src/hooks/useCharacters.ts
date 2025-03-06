import { useState, useEffect, useContext } from 'react'
import { getCharacterListHandler } from '../api/handlers/marvelHandlers.ts'
import { mapCharacterData } from '../utils/characterUtils.ts'
import { Character } from '../interfaces/Character.ts'
import { FavoritesContext } from '../context/FavoritesContext.tsx'
import { getCache, setCache } from '../utils/cacheUtils.ts'

interface useCharactersProps {
  characters: Character[]
  toggleFavorite: (character: Character) => void
  favorites: Character[]
  handleSearch: (search: string) => void
  loadingCharacters: boolean
}

const CACHE_KEY = 'charactersCache'

export const useCharacters = (): useCharactersProps => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext)

  useEffect(() => {
    loadCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadCharacters = async () => {
    const cachedData = getCache(CACHE_KEY)
    if (cachedData) {
      setCharacters(cachedData)
    } else {
      await getCharacters()
    }
  }

  const getCharacters = async (search = '') => {
    try {
      setLoading(true)
      const data = await getCharacterListHandler(search)
      const mapedData = mapCharacterData(data)
      setCharacters(mapedData)
      if (!search) setCache(CACHE_KEY, mapedData)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const toggleFavorite = (character: Character) => {
    if (favorites.some((favChar: Character) => favChar.id === character.id)) {
      removeFavorite(character.id)
    } else {
      addFavorite(character)
    }
  }

  const handleSearch = (search: string) => {
    getCharacters(search)
  }

  return {
    characters,
    toggleFavorite,
    favorites,
    handleSearch,
    loadingCharacters: loading,
  }
}
