import styled from 'styled-components'

const CharacterListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px;
`

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  gap: 20px;
`

export { CharacterListContainer, CharacterGrid }
