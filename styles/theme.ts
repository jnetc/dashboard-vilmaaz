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
    primary: string;
    primary_hover: string;
    danger: string;
    danger_hover: string;
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
    fontsize_36: string;
    fontsize_24: string;
    fontsize_18: string;
    fontsize_16: string;
    fontsize_14: string;
    shadow: string;
    shadow_primary: string;
    shadow_primary_hover: string;
    shadow_danger: string;
    shadow_danger_hover: string;
  }
}

export const theme: DefaultTheme = {
  white: 'hsl(240, 14%, 97%)',
  grey_light: 'hsl(0, 0%, 66%)',
  grey_middle: 'hsl(0, 0%, 32%)',
  grey_dark: 'hsl(240, 10%, 26%)',
  bg_light: 'hsl(240, 13%, 23%)',
  bg_regular: 'hsl(240, 17%, 19%)',
  bg_middle: 'hsl(240, 19%, 17%)',
  bg_main: 'hsl(240, 23%, 15%)',
  bg_dark: 'hsl(240, 26%, 13%)',
  primary: 'hsl(127, 28%, 75%)',
  primary_hover: 'hsl(127, 28%, 55%)',
  danger: 'hsl(346, 91%, 75%)',
  danger_hover: 'hsl(346, 48%, 62%)',
  bringpink: 'hsl(346, 60%, 75%)',
  bringpinkdark: 'hsl(346, 60%, 40%)',
  polishedpine: 'hsl(157, 60%, 75%)',
  polishedpinedark: 'hsl(157, 60%, 40%)',
  greenbluecayola: 'hsl(207, 60%, 75%)',
  greenbluecayoladark: 'hsl(207, 60%, 40%)',
  oldrose: 'hsl(8, 60%, 75%)',
  oldrosedark: 'hsl(8, 60%, 40%)',
  orhid: 'hsl(307, 60%, 75%)',
  orhiddark: 'hsl(307, 60%, 40%)',
  fontsize_36: '2rem',
  fontsize_24: '1.6rem',
  fontsize_18: '1.3rem',
  fontsize_16: '1rem',
  fontsize_14: '.8rem',
  shadow: '0, 0, 0',
  shadow_primary: '176, 211, 180',
  shadow_primary_hover: '142, 168, 149',
  shadow_danger: '249, 134, 161',
  shadow_danger_hover: '204, 110, 132',
};
