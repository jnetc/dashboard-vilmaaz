// import original module declarations
import { DefaultTheme } from 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    white: string;
    grey_light: string;
    grey_middle: string;
    grey_dark: string;
    bg_light: string;
    bg_regular: string;
    bg_middle: string;
    bg_main: string;
    bg_dark: string;
    element: string;
    elementhover: string;
    bringpink: string;
    bringpinkdark: string;
    polishedpine: string;
    polishedpinedark: string;
    greenbluecayola: string;
    greenbluecayoladark: string;
    oldrose: string;
    oldrosedark: string;
    orhid: string;
    orhiddark: string;
    fontsize_36: number;
    fontsize_24: number;
    fontsize_18: number;
    fontsize_16: number;
    fontsize_14: number;
    shadow: string;
    shadow_green: string;
  }
}

export const theme: DefaultTheme = {
  white: '#f7f7f9',
  grey_light: '#a9a9a9',
  grey_middle: '#515151',
  grey_dark: '#3c3c4a',
  bg_light: '#323241',
  bg_regular: '#282838',
  bg_middle: '#242333',
  bg_main: '#1e1d2e',
  bg_dark: '#191829',
  element: '#b0d3b4',
  elementhover: '#def2c8',
  bringpink: '#f986a1',
  bringpinkdark: '#99354d',
  polishedpine: '#82b3a0',
  polishedpinedark: '#2f4d41',
  greenbluecayola: '#7eafd8',
  greenbluecayoladark: '#214666',
  oldrose: '#cf9d95',
  oldrosedark: '#664540',
  orhid: '#e48ad9',
  orhiddark: '#803d78',
  fontsize_36: 36,
  fontsize_24: 24,
  fontsize_18: 18,
  fontsize_16: 16,
  fontsize_14: 14,
  shadow: '0, 0, 0',
  shadow_green: '176, 211, 180',
};
