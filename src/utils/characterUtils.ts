import { Character } from '../interfaces/Character.ts'
import { CharacterDetails } from '../interfaces/CharacterDetails.ts'

export const mapCharacterData = (characterList: any): Character[] => {
  return characterList.map((character: any) => ({
    id: character.id,
    name: character.name,
    img: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  }))
}

export const mapCharacterDetaisData = (character: any): CharacterDetails => {
  return {
    comics: character?.comics.items, // Array
    description: character.description,
    id: character.id,
    img: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    name: character.name,
  }
}
