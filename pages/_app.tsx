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
  /* min-height: 100%; */
  /* grid-column: 2 / 3; */
  /* display: flex; */
  /* grid-template-columns: 1fr; */
  /* padding: 20px 0 0 70px;
  border-radius: 30px 0 0 30px; */
  position: relative;
  overflow: hidden;
  /* background-color: ${props => props.theme.bg_middle()};
  box-shadow: 0px 40px 40px ${props => props.theme.bg_dark(0.2)},
    0px 10px 10px ${props => props.theme.bg_dark(0.3)}; */
`;
// const WrapperStyle = styled.div`
//   width: 100%;
//   /* height: 100%; */
//   /* grid-column: 2 / 3; */
//   display: flex;
//   /* grid-template-columns: 1fr; */
//   padding: 20px 0 0 70px;
//   border-radius: 30px 0 0 30px;
//   position: relative;
//   overflow-y: auto;
//   background-color: ${props => props.theme.bg_middle()};
//   box-shadow: 0px 40px 40px ${props => props.theme.bg_dark(0.2)},
//     0px 10px 10px ${props => props.theme.bg_dark(0.3)};
// `;

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
