import styled from 'styled-components'

const FavoritesContainer = styled.div`
  display: block;
  padding: 20px 30px;
  border-top: 5px solid transparent;
`

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #000;
  text-transform: uppercase;
`

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  width: 100%;
  gap: 20px;
`

export { FavoritesContainer, Title, CharacterGrid }
