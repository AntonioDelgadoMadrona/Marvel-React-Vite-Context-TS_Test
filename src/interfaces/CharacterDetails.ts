export interface CharacterDetails {
  id: number
  name: string
  description: string
  img: string
  comics: ComicItem[]
}

export interface ComicItem {
  resourceURI: string
  name: string
}
