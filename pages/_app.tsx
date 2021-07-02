import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

// import Header from '@Header';
import Store from '@Store';
import '@styles/style.css';

// THEME STYLES
import { theme } from '@styles/theme';

// IMPORT GLOBAL STYLES
import { GlobalStyle } from '@styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Store>
  );
}

export default MyApp;
