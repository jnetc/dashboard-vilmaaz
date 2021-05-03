import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import Navigation from '@Navigation';
// import Header from '@Header';
import Store from '@Store/Store';
import '../styles/style.css';

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
  grid-template-columns: 1fr minmax(100px, 300px);
  padding-left: 70px;
  border-radius: 30px 0 0 30px;
  position: relative;
  background-color: ${props => props.theme.bg_middle};
  box-shadow: 0px 40px 40px ${props => props.theme.shadow(0.2)},
    0px 10px 10px ${props => props.theme.shadow(0.3)};
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <WrapperStyle>
          <Component {...pageProps} />
        </WrapperStyle>
      </ThemeProvider>
    </Store>
  );
}

export default MyApp;
