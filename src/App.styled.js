import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
    margin: 0;
    padding: 0;

    & a {
      text-decoration: none;
    }
  }
`
