export const mapCharacterData = (characterList: any) => {
  return characterList.map((character: any) => ({
    id: character.id,
    name: character.name,
    img: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  }))
}
