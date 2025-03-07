import { createContext, useState, ReactNode, useEffect } from 'react'
import { Character } from '../interfaces/Character.ts'
import { getCache, setCache } from '../utils/cacheUtils.ts'
import { FAVORITES_STORAGE_KEY } from '../constants/storageKeys.ts'

interface FavoritesContextType {
  favorites: Character[]
  addFavorite: (newCharacter: Character) => void
  removeFavorite: (id: number) => void
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
})

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>(() => {
    return getCache(FAVORITES_STORAGE_KEY) || []
  })

  useEffect(() => {
    setCache(FAVORITES_STORAGE_KEY, favorites)
  }, [favorites])

  const addFavorite = (newCharacter: Character) => {
    setFavorites((prevFavorites) => [...prevFavorites, newCharacter])
  }

  const removeFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== id),
    )
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
