import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    padding: 0;
    margin: 0;
    line-height: 1;
    letter-spacing: 1px;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100%;
    font-family: Poppins, sans-serif;
    color: ${props => props.theme.white};
  }

  #__next {
    display: grid;
    grid-template-columns: minmax(120px, 220px) 1fr;
    background-color: ${props => props.theme.bg_main};
  }

  a {
    color: ${props => props.theme.white};
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
  h1, h2, h3, h4,h5, h6 {
    font-weight: 400;
  }
  p, time, span {
    font-weight: 300;
  }
  /* SCROLLBAR */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.bg_main};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.bg_light};
    /* border-right: 1px solid green; */
  }
`;
