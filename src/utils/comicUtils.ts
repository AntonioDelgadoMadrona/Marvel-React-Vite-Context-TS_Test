import { Comic } from '../interfaces/Comic.ts'

export const mapComicItem = (comicList: any): Comic[] => {
  return comicList.map((comic: any) => {
    const saleDate =
      comic.dates.find((date: any) => date.type === 'onsaleDate')?.date ||
      'No disponible'
    return {
      id: comic.id,
      title: comic.title,
      img: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      saleDate,
    }
  })
}
