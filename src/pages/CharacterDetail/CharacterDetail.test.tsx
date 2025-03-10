import { render } from '@testing-library/react'
import CharacterDetail from './CharacterDetail.tsx'
import { useCharacters } from '../../hooks/useCharacters.ts'
import { useFavorites } from '../../context/FavoritesContext.tsx'
import { useComics } from '../../hooks/useComics.ts'

jest.mock('../../hooks/useCharacters')
jest.mock('../../hooks/useComics')
jest.mock('../../../api/constants/apiUrls.ts', () => ({
  API_KEY: 'clave-de-prueba',
  API_URL: 'https://gateway.marvel.com/v1/public',
}))
jest.mock('../../context/FavoritesContext.tsx', () => ({
  useFavorites: jest.fn(),
}))

describe('CharacterDetail Component', () => {
  const mockCharacterDetails = {
    id: '1001',
    name: 'Spider-Man',
    description: 'A superhero with spider abilities.',
    img: 'https://example.com/spiderman.jpg',
  }

  const mockComicsList = [
    {
      id: '2001',
      title: 'Amazing Spider-Man #1',
      img: 'https://example.com/spiderman_comic.jpg',
      saleDate: '1962-08-01T00:00:00-0400',
    },
  ]

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useCharacters as jest.Mock).mockReturnValue({
      apiLoading: false,
      getCharacterDetails: jest.fn(),
      characterDetails: mockCharacterDetails,
    })
    ;(useFavorites as jest.Mock).mockReturnValue({
      favorites: [],
      handleFavorite: jest.fn(),
    })
    ;(useComics as jest.Mock).mockReturnValue({
      comicsList: mockComicsList,
      getComicList: jest.fn(),
    })
  })

  test('should render the `CharacterList` component', () => {
    const { container } = render(<CharacterDetail />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
