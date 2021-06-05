import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import Navigation from '@Navigation';

// import Header from '@Header';
import GlobalStore from '@Store/GlobalStore';
import MainStore from '@Store/MainStore';
import '../styles/style.css';

// THEME STYLES
import { theme } from '@styles/theme';

// IMPORT GLOBAL STYLES
import { GlobalStyle } from '@styles/global';

// MAIN WRAPPER STYLE
const WrapperStyle = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStore>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <MainStore>
          <WrapperStyle>
            <Component {...pageProps} />
          </WrapperStyle>
        </MainStore>
      </ThemeProvider>
    </GlobalStore>
  );
}

export default MyApp;
