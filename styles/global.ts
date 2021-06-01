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
    color: ${({ theme }) => theme.white()};
  }

  body.right-side {
    overflow: hidden;
  }

  #__next {
    width: 100%;
    min-height: 100vh;
    display: flex;
    /* display: grid; */
    /* grid-template-columns: minmax(120px, 220px) 1fr; */
    /* grid-template-columns:  1fr; */
    position: relative;
    background-color: ${({ theme }) => theme.bg_main()};

  }
  @media (min-width: 1921px) {
    #__next {
      width: 100%;
    }
  }

  a {
    color: ${({ theme }) => theme.white()};
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
    background: ${({ theme }) => theme.bg_regular()};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.grey_dark()};
    /* border-right: 1px solid green; */
    border-radius: 50px;
  }
`;
