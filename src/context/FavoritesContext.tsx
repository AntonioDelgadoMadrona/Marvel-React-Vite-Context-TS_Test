import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from 'react'
import { Character } from '../interfaces/Character.ts'
import { getCache, setCache } from '../utils/cacheUtils.ts'
import { FAVORITES_STORAGE_KEY } from '../constants/storageKeys.ts'

interface FavoritesContextType {
  favorites: Character[]
  handleFavorite: (character: Character) => void
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  handleFavorite: () => {},
})

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>(() => {
    return getCache(FAVORITES_STORAGE_KEY) || []
  })

  useEffect(() => {
    setCache(FAVORITES_STORAGE_KEY, favorites)
  }, [favorites])

  const handleFavorite = (character: Character) => {
    if (favorites.some((favChar) => favChar.id === character.id)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.id !== character.id),
      )
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, character])
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, handleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
