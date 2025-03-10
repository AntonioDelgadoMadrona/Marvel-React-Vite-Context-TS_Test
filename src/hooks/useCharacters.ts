import { useState, useEffect, useCallback } from 'react'
import {
  getCharacterListHandler,
  getCharacterDetailsHanlder,
} from '../../api/handlers/marvelHandlers.ts'
import {
  mapCharacterData,
  mapCharacterDetaisData,
} from '../utils/characterUtils.ts'
import { Character } from '../interfaces/Character.ts'
import { getCache, setCache } from '../utils/cacheUtils.ts'
import {
  CHARACTER_DETAILS_STORAGE_KEY,
  CHARACTERS_STORAGE_KEY,
} from '../constants/storageKeys.ts'
import { CharacterDetails } from '../interfaces/CharacterDetails.ts'

interface useCharactersProps {
  characters: Character[]
  handleSearch: (search: string) => void
  apiLoading: boolean
  getCharacterDetails: (characterId: string) => void
  characterDetails: CharacterDetails | undefined
}

export const useCharacters = (): useCharactersProps => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [characterDetails, setCharacterDetails] = useState<
    CharacterDetails | undefined
  >()

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
      setCharacters([...mapedData])
      if (!search) setCache(CHARACTERS_STORAGE_KEY, mapedData)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const getCharacterDetails = useCallback(async (characterId: string) => {
    const cacheKey = CHARACTER_DETAILS_STORAGE_KEY
    const cachedCharacter = getCache(cacheKey)

    if (cachedCharacter && cachedCharacter.id === Number(characterId)) {
      setCharacterDetails({ ...cachedCharacter })
      return
    }

    try {
      setLoading(true)
      const data = await getCharacterDetailsHanlder(characterId)
      const mappedData = mapCharacterDetaisData(data)
      setCharacterDetails({ ...mappedData })
      setCache(cacheKey, mappedData)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleSearch = (search: string) => {
    getCharacters(search)
  }

  return {
    characters,
    handleSearch,
    apiLoading: loading,
    getCharacterDetails,
    characterDetails,
  }
}
