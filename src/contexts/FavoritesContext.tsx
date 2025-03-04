import { createContext, useState, ReactNode } from 'react'

interface FavoritesContextType {
  favorites: string[]
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
}

export const FavoritesContext = createContext<FavoritesContextType | null>(null)

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([])

  const addFavorite = (id: string) => setFavorites([...favorites, id])
  const removeFavorite = (id: string) =>
    setFavorites(favorites.filter((fav) => fav !== id))

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
