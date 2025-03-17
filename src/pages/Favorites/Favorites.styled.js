import styled from 'styled-components'

const FavoritesContainer = styled.div`
  display: block;
  padding: 20px;
  border-top: 5px solid transparent;
`

const Title = styled.h1`
  font-size: var(--font-size-lg);
  margin: 10px 0;
  color: var(--secondary-color);
  text-transform: uppercase;
`

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  width: 100%;
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, 160px);
  }
`

export { FavoritesContainer, Title, CharacterGrid }
