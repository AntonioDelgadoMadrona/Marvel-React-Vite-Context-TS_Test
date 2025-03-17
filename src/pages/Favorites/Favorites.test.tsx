import { render, screen, fireEvent } from '@testing-library/react'
import Favorites from './Favorites.tsx'
import { useFavorites } from '../../context/FavoritesContext.tsx'

jest.mock('../../hooks/useCharacters.ts', () => ({
  useCharacters: jest.fn(),
}))
jest.mock('../../context/FavoritesContext.tsx', () => ({
  useFavorites: jest.fn(),
}))
jest.mock('../../components/molecules/CharacterCard/CharacterCard.tsx', () => {
  return function MockCharacterCard() {
    return <div></div>
  }
})
jest.mock('../../hooks/useDebounce.ts', () => ({
  useDebounce: (value: string) => value, // Return instantly
}))

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
    ;(useFavorites as jest.Mock).mockReturnValue({
      favorites: mockFavorites,
      handleFavorite: jest.fn(),
    })
  })

  test('renders the favorites page correctly', () => {
    render(<Favorites />)

    expect(screen.getByText('Favorites')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Search a character...'),
    ).toBeInTheDocument()
    const characterGrid = screen.getByTestId('character-grid-favorites')
    expect(characterGrid.children.length).toBe(mockFavorites.length)
  })

  test('filters favorite characters correctly when searching by name', () => {
    render(<Favorites />)

    const searchInput = screen.getByPlaceholderText('Search a character...')
    fireEvent.change(searchInput, { target: { value: 'Spider' } })
    expect(searchInput).toHaveValue('Spider')

    const characterGrid = screen.getByTestId('character-grid-favorites')
    expect(characterGrid.children.length).toBe(1)
  })
})
