import axios from 'axios'
import { API_URL, API_KEY } from '../constants/apiUrls.ts'

export async function getCharacterListService(search = '') {
  try {
    const params: Record<string, string | number> = {
      apikey: API_KEY,
      limit: 50,
    }

    if (search.trim()) {
      params.nameStartsWith = search.trim()
    }

    const response = await axios.get(API_URL, { params })
    return response?.data.data.results
  } catch (error) {
    console.log('Error al obtener la lista de personajes:', error)
    throw error
  }
}

export async function getCharacterDetailsService(characterId: string) {
  try {
    const params: Record<string, string | number> = {
      apikey: API_KEY,
      id: characterId,
    }

    const response = await axios.get(API_URL, { params })
    return response?.data.data.results[0]
  } catch (error) {
    console.log('Error al obtener la lista de personajes:', error)
    throw error
  }
}
