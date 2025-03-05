import { createContext, useState, ReactNode } from 'react'

interface FavoritesContextType {
  favorites: number[]
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
})

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>([])

  const addFavorite = (id: number) => {
    setFavorites((prevFavorites) => [...prevFavorites, id])
  }

  const removeFavorite = (id: number) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav !== id))
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
