import { render, screen } from '@testing-library/react'
import App from '../App.tsx'

test('Renderiza el logo de Marvel', () => {
  render(<App />)
  const title = screen.getByText('Home Page')
  expect(title).toBeInTheDocument()
})
