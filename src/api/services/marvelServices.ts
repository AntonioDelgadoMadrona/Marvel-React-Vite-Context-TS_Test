import axios from 'axios'

const API_URL = 'https://gateway.marvel.com/v1/public/characters'
const API_KEY = '88845085d8592188865490d40043f685'

export const getCharacterListService = async (search = '') => {
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
