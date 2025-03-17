import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-primary);
  }

  body {
    background-color: var(--tertiary-color);
    color: var(--secondary-color);
    margin: 0;
    padding: 0;

    & a {
      text-decoration: none;
    }
  }
`
