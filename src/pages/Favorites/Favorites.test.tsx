import { render, screen, fireEvent } from '@testing-library/react'
import Favorites from './Favorites.tsx'
import { FavoritesProvider } from '../../context/FavoritesContext.tsx'
import { useCharacters } from '../../hooks/useCharacters.ts'

jest.mock('../../hooks/useCharacters.ts', () => ({
  useCharacters: jest.fn(),
}))
jest.mock('../../components/CharacterCard/CharacterCard.tsx', () => {
  return function MockCharacterCard() {
    return <div></div>
  }
})
jest.mock('../../hooks/useDebounce.ts', () => ({
  useDebounce: (value: string) => value, // Return instantly
}))

const mockToggleFavorite = jest.fn()

const mockFavorites = [
  {
    id: 1,
    name: 'Spider-Man',
    thumbnail: { path: 'spider', extension: 'jpg' },
  },
  { id: 2, name: 'Iron Man', thumbnail: { path: 'iron', extension: 'jpg' } },
]

describe('Favorites Page', () => {
  beforeEach(() => {
    ;(useCharacters as jest.Mock).mockReturnValue({
      favorites: mockFavorites,
      toggleFavorite: mockToggleFavorite,
    })
  })

  test('renders the favorites page correctly', () => {
    render(
      <FavoritesProvider>
        <Favorites />
      </FavoritesProvider>,
    )

    expect(screen.getByText('Favorites')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Search a character...'),
    ).toBeInTheDocument()
    const characterGrid = screen.getByTestId('character-grid-favorites')
    expect(characterGrid.children.length).toBe(mockFavorites.length)
  })

  test('filters favorite characters correctly when searching by name', () => {
    render(
      <FavoritesProvider>
        <Favorites />
      </FavoritesProvider>,
    )

    const searchInput = screen.getByPlaceholderText('Search a character...')
    fireEvent.change(searchInput, { target: { value: 'Spider' } })
    expect(searchInput).toHaveValue('Spider')

    const characterGrid = screen.getByTestId('character-grid-favorites')
    expect(characterGrid.children.length).toBe(1)
  })
})
