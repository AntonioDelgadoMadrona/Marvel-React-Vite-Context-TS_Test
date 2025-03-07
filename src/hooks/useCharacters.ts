import { useState, useEffect, useContext, useCallback } from 'react'
import { getCharacterListHandler } from '../api/handlers/marvelHandlers.ts'
import { mapCharacterData } from '../utils/characterUtils.ts'
import { Character } from '../interfaces/Character.ts'
import { FavoritesContext } from '../context/FavoritesContext.tsx'
import { getCache, setCache } from '../utils/cacheUtils.ts'
import { CHARACTERS_STORAGE_KEY } from '../constants/storageKeys.ts'

interface useCharactersProps {
  characters: Character[]
  toggleFavorite: (character: Character) => void
  favorites: Character[]
  handleSearch: (search: string) => void
  loadingCharacters: boolean
}

export const useCharacters = (): useCharactersProps => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext)

  const loadCharacters = useCallback(async () => {
    const cachedData = getCache(CHARACTERS_STORAGE_KEY)
    if (cachedData) {
      setCharacters(cachedData)
    } else {
      await getCharacters()
    }
  }, [])

  useEffect(() => {
    loadCharacters()
  }, [loadCharacters])

  const getCharacters = async (search = '') => {
    try {
      setLoading(true)
      const data = await getCharacterListHandler(search)
      const mapedData = mapCharacterData(data)
      setCharacters(mapedData)
      if (!search) setCache(CHARACTERS_STORAGE_KEY, mapedData)
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
