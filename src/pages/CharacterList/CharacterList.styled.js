import styled from 'styled-components'

const CharacterListContainer = styled.div`
  display: block;
  padding: 20px;
  border-top: 5px solid transparent;

  &.loading {
    border-color: #e62429;
  }
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

export { CharacterListContainer, CharacterGrid }
