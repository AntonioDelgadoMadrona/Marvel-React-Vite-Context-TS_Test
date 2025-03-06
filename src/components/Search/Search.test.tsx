import { render, screen, fireEvent } from '@testing-library/react'
import Search from './Search.tsx'

describe('Search Component', () => {
  it('should render the search input and icon', () => {
    render(<Search results={0} handleSearch={jest.fn()} loading={false} />)

    expect(
      screen.getByPlaceholderText('Search a character...'),
    ).toBeInTheDocument()
    expect(screen.getByAltText('Search Icon')).toBeInTheDocument()
  })

  it('should update input value when user types', () => {
    render(<Search results={0} handleSearch={jest.fn()} loading={false} />)

    const input = screen.getByPlaceholderText('Search a character...')

    fireEvent.change(input, { target: { value: 'Spider-Man' } })

    expect(input).toHaveValue('Spider-Man')
  })

  it('should display the correct search results count', () => {
    render(<Search results={3} handleSearch={jest.fn()} loading={false} />)

    expect(screen.getByText('3 results')).toBeInTheDocument()

    render(<Search results={1} handleSearch={jest.fn()} loading={false} />)

    expect(screen.getByText('1 result')).toBeInTheDocument()
  })
})
