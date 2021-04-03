import React from 'react';
import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import Navigation from '@Navigation';
import Header from '@Header';

// THEME STYLES
import { theme } from '@styles/theme';

// IMPORT GLOBAL STYLES
import { GlobalStyle } from '@styles/global';

// MAIN WRAPPER STYLE
const WrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: 130px 1fr;
  padding-left: 70px;
  border-radius: 30px 0 0 30px;
  background-color: ${props => props.theme.bg_middle};
  box-shadow: 0px 40px 40px rgba(${props => props.theme.shadow}, 0.2),
    0px 10px 10px rgba(${props => props.theme.shadow}, 0.3);

  nav {
    grid-column: 1 / 2;
  }

  main {
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <WrapperStyle>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
        </WrapperStyle>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;
