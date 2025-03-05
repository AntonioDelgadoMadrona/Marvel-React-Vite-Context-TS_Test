import { getCharacterListService } from '../services/marvelServices.ts'

export async function getCharacterListHandler() {
  const response = await getCharacterListService()
  return [...response]
}
