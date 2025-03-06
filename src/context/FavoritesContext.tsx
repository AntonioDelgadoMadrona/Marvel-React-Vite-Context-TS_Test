import { createContext, useState, ReactNode } from 'react'
import { Character } from '../interfaces/Character.ts'

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
  const [favorites, setFavorites] = useState<Character[]>([])

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
