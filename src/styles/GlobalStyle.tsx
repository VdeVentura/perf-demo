import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
    background: #f4f7fa;
    overflow-x: hidden;
  }
  body, button, input, select, textarea {
    color: ${({ theme }) => theme.colors.black};
  }

  a {
    text-decoration:none;
    color: ${({ theme }) => theme.colors.primaryDark}
  }
`;
