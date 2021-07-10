import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    letter-spacing: 0.5px;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  html, body {
    height: 100%;
    font-family: Roboto, sans-serif;
    color: ${({ theme }) => theme.white_soft()};
    background-color: ${({ theme }) => theme.bg_black()}
  }

  body.right-side {
    overflow: hidden;
  }

  #__next {
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-rows: 115px 1fr;
    position: relative;
    /* background-color: ${({ theme }) => theme.bg_black()}; */
    overflow: hidden;
  }
  @media (min-width: 1921px) {
    #__next {
      width: 100%;
    }
  }

  a {
    color: ${({ theme }) => theme.white_soft()};
    text-decoration: none;
  }

  ul, ol {
    list-style-type: none;
  }
  h1, h2, h3, h4,h5, h6, p, time, span {
    font-weight: 400;
    line-height: 1;
  }
  button {
    border: none;
    background: transparent;
  }

  /* SCROLLBAR */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bg_soft()};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.grey_dark()};
    border-radius: 50px;
  }
/*  Selection input text */
  ::selection {
    background: ${({ theme }) => theme.grey_dark()};
  }
`;
