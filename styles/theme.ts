// import original module declarations
import { DefaultTheme } from 'styled-components';

// type Tye<T> = {
//   val: T
// }

declare function AlphaChanel<T extends number | null>(alpha: T): string;
declare function LessonColor(color: string): string;
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
    lessonColor: typeof LessonColor;
  }
}

export const theme: DefaultTheme = {
  white: 'hsl(0, 0%, 97%)',
  grey_light: 'hsl(0, 0%, 66%)',
  grey_middle: 'hsl(0, 0%, 32%)',
  grey_dark: 'hsl(240, 10%, 26%)',
  bg_light: 'hsl(240, 10%, 23%)',
  bg_regular: 'hsl(244, 15%, 19%)',
  bg_middle: 'hsl(244, 16%, 17%)',
  bg_middle_alpha: 'hsla(244, 16%, 17%, 0.7)',
  bg_main: 'hsl(244, 20%, 15%)',
  bg_dark: 'hsl(244, 23%, 13%)',
  primary: 'hsl(127, 28%, 75%)',
  primary_hover: 'hsl(127, 28%, 55%)',
  danger: 'hsl(346, 90%, 75%)',
  danger_hover: 'hsl(346, 90%, 55%)',
  bringpink: 'hsl(346, 90%, 75%)',
  bringpinkdark: 'hsl(346, 50%, 30%)',
  polishedpine: 'hsl(157, 25%, 60%)',
  polishedpinedark: 'hsl(157, 5%, 30%)',
  greenbluecayola: 'hsl(207, 55%, 65%)',
  greenbluecayoladark: 'hsl(207, 35%, 25%)',
  oldrose: 'hsl(8, 40%, 70%)',
  oldrosedark: 'hsl(8, 20%, 30%)',
  orhid: 'hsl(307, 60%, 60%)',
  orhiddark: 'hsl(307, 40%, 30%)',
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
  lessonColor: color => color,
};
