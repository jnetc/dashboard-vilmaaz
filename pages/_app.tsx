import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

// Context Store;
import Store from '@Store';
import Main from '@Main';

// THEME STYLES
import { theme } from '@styles/theme';

// IMPORT GLOBAL STYLES
import { GlobalStyle } from '@styles/global';
import '@styles/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Main>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Main>
    </Store>
  );
}

export default MyApp;
