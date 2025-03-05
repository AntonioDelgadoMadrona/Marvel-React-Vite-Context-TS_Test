import { useState, useEffect, useContext } from 'react'
import { getCharacterListHandler } from '../api/handlers/marvelHandlers.ts'
import { mapCharacterData } from '../utils/characterUtils.ts'
import { Character } from '../interfaces/Character.ts'
import { FavoritesContext } from '../context/FavoritesContext.tsx'
// import { charactersMock } from '../api/mocks/charactersMock.js'

interface useCharactersProps {
  characters: Character[]
  toggleFavorite: (id: number) => void
  favorites: number[]
}

export const useCharacters = (): useCharactersProps => {
  const [characters, setCharacters] = useState([])
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext)

  useEffect(() => {
    getCharacters()
  }, [])

  const getCharacters = async () => {
    try {
      const data = await getCharacterListHandler()
      const mapedData = mapCharacterData(data)
      setCharacters(mapedData)
    } catch (err) {
      console.log(err)
    }
  }

  const toggleFavorite = (id: number) => {
    if (favorites.some((favId) => favId === id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  return { characters, toggleFavorite, favorites }
}
