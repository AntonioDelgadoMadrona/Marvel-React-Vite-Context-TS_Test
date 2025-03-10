import { useState, useCallback } from 'react'
import { getComicsListHandler } from '../../api/handlers/marvelHandlers.ts'
import { mapComicItem } from '../utils/comicUtils.ts'
import { Comic } from '../interfaces/Comic.ts'
import { getCache, setCache } from '../utils/cacheUtils.ts'
import { COMICS_STORAGE_KEY } from '../constants/storageKeys.ts'

interface useComicsProps {
  comicsLoading: boolean
  comicsList: Comic[]
  getComicList: (characterId: string) => void
}

export const useComics = (): useComicsProps => {
  const [comicsList, setComicsList] = useState<Comic[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getComicList = useCallback(async (characterId: string) => {
    const cacheKey = COMICS_STORAGE_KEY
    const cachedComics = getCache(cacheKey)

    if (cachedComics && cachedComics.characterId === characterId) {
      setComicsList([...cachedComics.comics])
      return
    }

    try {
      setLoading(true)
      const data = await getComicsListHandler(characterId)
      const mappedData = mapComicItem(data)
      setComicsList(mappedData)
      setCache(cacheKey, {
        characterId,
        comics: mappedData,
      })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    comicsLoading: loading,
    comicsList,
    getComicList,
  }
}
