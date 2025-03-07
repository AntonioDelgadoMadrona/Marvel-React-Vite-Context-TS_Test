import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CharacterCard from './CharacterCard.tsx'
import { Character } from '../../interfaces/Character.ts'

const mockCharacter: Character = {
  id: 1,
  name: 'Spider-Man',
  img: 'spiderman.jpg',
}

describe('CharacterCard', () => {
  it("should render the character's name and image", () => {
    render(
      <MemoryRouter>
        <CharacterCard
          character={mockCharacter}
          isFavorite={false}
          handleFavorite={jest.fn()}
        />
      </MemoryRouter>,
    )

    expect(screen.getByText('Spider-Man')).toBeInTheDocument()
    expect(screen.getByAltText('Spider-Man')).toHaveAttribute(
      'src',
      'spiderman.jpg',
    )
  })

  it('should call `handleToggleFavorite` when the favorite button is clicked', () => {
    const mockHandleToggleFavorite = jest.fn()

    render(
      <MemoryRouter>
        <CharacterCard
          character={mockCharacter}
          isFavorite={false}
          handleFavorite={mockHandleToggleFavorite}
        />
      </MemoryRouter>,
    )

    const favoriteButton = screen.getByRole('button')

    fireEvent.click(favoriteButton)

    expect(mockHandleToggleFavorite).toHaveBeenCalledWith(mockCharacter)
  })

  it('should apply `hovered` class on mouse enter and remove it on mouse leave', () => {
    render(
      <MemoryRouter>
        <CharacterCard
          character={mockCharacter}
          isFavorite={false}
          handleFavorite={jest.fn()}
        />
      </MemoryRouter>,
    )

    const card = screen.getByRole('link')

    fireEvent.mouseEnter(card)
    expect(card.closest('div')).toHaveClass('hovered')

    fireEvent.mouseLeave(card)
    expect(card.closest('div')).not.toHaveClass('hovered')
  })
})
