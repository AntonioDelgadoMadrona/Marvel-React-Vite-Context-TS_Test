import axios from 'axios'

const API_URL =
  'https://gateway.marvel.com/v1/public/characters?apikey=88845085d8592188865490d40043f685'
// const API_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY

export const getCharacterListService = async () => {
  try {
    const response = await axios.get(`${API_URL}`, {
      params: {
        // apikey: API_KEY,
        limit: 20,
      },
    })
    return response?.data.data.results
  } catch (error) {
    console.log('Error al obtener la lista de personajes:', error)
    throw error
  }
}
