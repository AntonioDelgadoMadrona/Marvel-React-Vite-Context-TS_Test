import { render, screen } from '@testing-library/react'
import CharacterList from './CharacterList.tsx'
import { useCharacters } from '../../hooks/useCharacters.ts'

jest.mock('../../hooks/useCharacters')
jest.mock('../../components/CharacterCard/CharacterCard.tsx', () => {
  return function MockCharacterCard() {
    return <div></div>
  }
})

describe('CharacterList', () => {
  test('should render the `CharacterList` component', () => {
    ;(useCharacters as jest.Mock).mockReturnValue({
      characters: [],
      toggleFavorite: jest.fn(),
      favorites: [],
      handleSearch: jest.fn(),
      loadingCharacters: false,
    })

    const { container } = render(<CharacterList />)
    expect(container.firstChild).toBeInTheDocument()
  })

  test('should apply the `.loading` class to CharacterListContainer when loading is true', () => {
    ;(useCharacters as jest.Mock).mockReturnValue({
      characters: [],
      toggleFavorite: jest.fn(),
      favorites: [],
      handleSearch: jest.fn(),
      loadingCharacters: true,
    })

    const { container } = render(<CharacterList />)
    expect(container.firstChild).toHaveClass('loading')
  })

  test('should render the `Search` component', () => {
    ;(useCharacters as jest.Mock).mockReturnValue({
      characters: [],
      toggleFavorite: jest.fn(),
      favorites: [],
      handleSearch: jest.fn(),
      loadingCharacters: false,
    })

    render(<CharacterList />)

    expect(
      screen.getByPlaceholderText('Search a character...'),
    ).toBeInTheDocument()
  })

  test('should render characters when data is available', () => {
    ;(useCharacters as jest.Mock).mockReturnValue({
      characters: [
        { id: 1, name: 'Name' },
        { id: 2, name: 'Name' },
      ],
      toggleFavorite: jest.fn(),
      favorites: [],
      handleSearch: jest.fn(),
      loadingCharacters: false,
    })

    render(<CharacterList />)

    const characterGrid = screen.getByTestId('character-grid')
    expect(characterGrid.children.length).toBe(2)
  })
})
