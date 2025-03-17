import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--secondary-color);
  color: var(--tertiary-color);
  padding: 15px 30px;
`

const Logo = styled.img`
  height: 50px;
`

export { HeaderContainer, Logo }
