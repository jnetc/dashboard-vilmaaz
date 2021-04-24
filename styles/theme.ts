// import original module declarations
import { DefaultTheme } from 'styled-components';

// type Tye<T> = {
//   val: T
// }

declare function AlphaChanel<T extends number | null>(alpha: T): string;
// declare function ColorHSL<T>(color?: T): string;

// const x: Tye<number> = (val: T): T => {
//   return val
// }

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
    bg_middle_alpha: string;
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
    timeline: string;
    // shadow: string;
    shadow: typeof AlphaChanel;
    shadow_primary: typeof AlphaChanel;
    shadow_primary_hover: typeof AlphaChanel;
    shadow_danger: typeof AlphaChanel;
    shadow_danger_hover: typeof AlphaChanel;
  }
}

export const theme: DefaultTheme = {
  white: 'hsl(0, 0%, 97%)',
  grey_light: 'hsl(0, 0%, 66%)',
  grey_middle: 'hsl(0, 0%, 32%)',
  grey_dark: 'hsl(240, 10%, 26%)',
  bg_light: 'hsl(240, 19%, 23%)',
  bg_regular: 'hsl(240, 19%, 19%)',
  bg_middle: 'hsl(240, 19%, 17%)',
  bg_middle_alpha: 'hsla(240, 19%, 17%, 0.7)',
  bg_main: 'hsl(240, 19%, 15%)',
  bg_dark: 'hsl(240, 19%, 13%)',
  primary: 'hsl(127, 28%, 75%)',
  primary_hover: 'hsl(127, 28%, 55%)',
  danger: 'hsl(346, 90%, 75%)',
  danger_hover: 'hsl(346, 90%, 55%)',
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
  timeline: '2000',
  shadow: alpha => `hsla(240, 19%, 5%, ${alpha})`,
  shadow_primary: alpha =>
    alpha ? `hsla(127, 28%, 75%, ${alpha})` : '127, 28%, 75%',
  shadow_primary_hover: alpha => `hsla(127, 28%, 55%, ${alpha})`,
  shadow_danger: alpha => `hsla(346, 90%, 75%, ${alpha})`,
  shadow_danger_hover: alpha => `hsla(346, 90%, 55%, ${alpha})`,
};
