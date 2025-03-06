import styled from 'styled-components'

const CharacterListContainer = styled.div`
  display: block;
  padding: 20px 30px;
  border-top: 5px solid transparent;

  &.loading {
    border-color: #e62429;
  }
`

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  gap: 20px;
`

export { CharacterListContainer, CharacterGrid }
