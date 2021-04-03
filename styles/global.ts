import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    padding: 0;
    margin: 0;
    line-height: 1;
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
