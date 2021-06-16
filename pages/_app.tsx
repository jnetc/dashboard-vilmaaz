import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

// import Header from '@Header';
import GlobalStore from '@Store/GlobalStore';
import MainStore from '@Store/MainStore';
import '../styles/style.css';

// THEME STYLES
import { theme } from '@styles/theme';

// IMPORT GLOBAL STYLES
import { GlobalStyle } from '@styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStore>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainStore>
          <Component {...pageProps} />
        </MainStore>
      </ThemeProvider>
    </GlobalStore>
  );
}

export default MyApp;
