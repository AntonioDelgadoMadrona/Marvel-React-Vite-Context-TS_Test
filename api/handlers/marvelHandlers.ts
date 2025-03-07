import {
  getCharacterListService,
  getCharacterDetailsService,
} from '../services/marvelServices.ts'

export async function getCharacterListHandler(search = '') {
  const response = await getCharacterListService(search)
  return [...response]
}

export async function getCharacterDetailsHanlder(characterId: string) {
  const response = await getCharacterDetailsService(characterId)
  return { ...response }
}
