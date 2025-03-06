import { getCharacterListService } from '../services/marvelServices.ts'

export async function getCharacterListHandler(search = '') {
  const response = await getCharacterListService(search)
  return [...response]
}
