import styled from 'styled-components'

const InputComponent = styled.input`
  border: 0;
  width: 100%;
  outline: none;
  text-transform: uppercase;
  font-size: var(--font-size-sm);
  background: transparent;

  &::placeholder {
    color: var(--placeholder-color);
  }
`

export { InputComponent }
