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
    color: ${props => props.theme.white};
  }

  #__next {
    overflow: hidden;
    min-height: 100%;
    display: grid;
    grid-template-columns: minmax(120px, 220px) 1fr;
    position: relative;
    background-color: ${props => props.theme.bg_main};
  }

  a {
    color: ${props => props.theme.white};
    text-decoration: none;
  }

  ul, ol {
    list-style-type: none;
  }
  h1, h2, h3, h4,h5, h6 {
    font-weight: 400;
    line-height: 1;
  }
  p, time, span {
    font-weight: 300;
    line-height: 1;
  }
  /* SCROLLBAR */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.bg_regular};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.grey_dark};
    /* border-right: 1px solid green; */
    border-radius: 50px;
  }
`;
