// import original module declarations
import { DefaultTheme } from 'styled-components';

// type Tye<T> = {
//   val: T
// }

declare function AlphaChanel(alpha?: number): string;
declare function LessonColor(color: string): string;
// declare function ColorHSL<T>(color?: T): string;

// const x: Tye<number> = (val: T): T => {
//   return val
// }

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    white: typeof AlphaChanel;
    grey_light: typeof AlphaChanel;
    grey_middle: typeof AlphaChanel;
    grey_dark: typeof AlphaChanel;
    bg_light: typeof AlphaChanel;
    bg_regular: typeof AlphaChanel;
    bg_middle: typeof AlphaChanel;
    bg_main: typeof AlphaChanel;
    bg_dark: typeof AlphaChanel;
    primary: typeof AlphaChanel;
    primary_hover: typeof AlphaChanel;
    danger: typeof AlphaChanel;
    danger_hover: typeof AlphaChanel;
    bringpink: typeof AlphaChanel;
    bringpinkdark: typeof AlphaChanel;
    polishedpine: typeof AlphaChanel;
    polishedpinedark: typeof AlphaChanel;
    greenbluecayola: typeof AlphaChanel;
    greenbluecayoladark: typeof AlphaChanel;
    oldrose: typeof AlphaChanel;
    oldrosedark: typeof AlphaChanel;
    orhid: typeof AlphaChanel;
    orhiddark: typeof AlphaChanel;
    fontsize_48: string;
    fontsize_36: string;
    fontsize_24: string;
    fontsize_18: string;
    fontsize_16: string;
    fontsize_14: string;
    timeline: string;
    // shadow: string;
    // lessonColor: typeof LessonColor;
  }
}

export const theme: DefaultTheme = {
  white: (alpha = 1) => `hsl(0 0% 97% / ${alpha})`, //'hsl(0, 0%, 97%)'
  grey_light: (alpha = 1) => `hsl(0 0% 66% / ${alpha})`, //'hsl(0, 0%, 66%)'
  grey_middle: (alpha = 1) => `hsl(0 0% 32% / ${alpha})`, //'hsl(0, 0%, 32%)'
  grey_dark: (alpha = 1) => `hsl(240 10% 26% / ${alpha})`, //'hsl(240, 10%, 26%)'
  bg_light: (alpha = 1) => `hsl(240 13% 23% / ${alpha})`, //'hsl(240, 10%, 23%)'
  bg_regular: (alpha = 1) => `hsl(244 17% 19% / ${alpha})`, //'hsl(244, 15%, 19%)'
  bg_middle: (alpha = 1) => `hsl(244 19% 17% / ${alpha})`, //'hsl(244, 16%, 17%)'
  bg_main: (alpha = 1) => `hsl(244 23% 15% / ${alpha})`, //'hsl(244, 20%, 15%)'
  bg_dark: (alpha = 1) => `hsl(244 26% 13% / ${alpha})`, //'hsl(244, 23%, 13%)'
  primary: (alpha = 1) => `hsl(127 28% 75% / ${alpha})`, // 'hsl(127, 28%, 75%)'
  primary_hover: (alpha = 1) => `hsl(127 28% 55% / ${alpha})`, //'hsl(127, 28%, 55%)'
  danger: (alpha = 1) => `hsl(346 90% 75% / ${alpha})`, //'hsl(346, 90%, 75%)'
  danger_hover: (alpha = 1) => `hsl(346 90% 55% / ${alpha})`, //'hsl(346, 90%, 55%)'
  bringpink: (alpha = 1) => `hsl(346 90% 75%/ ${alpha})`, //'hsl(346, 90%, 75%)'
  bringpinkdark: (alpha = 1) => `hsl(346 50% 30% / ${alpha})`, //'hsl(346, 50%, 30%)'
  polishedpine: (alpha = 1) => `hsl(157 25% 60% / ${alpha})`, //'hsl(157, 25%, 60%)'
  polishedpinedark: (alpha = 1) => `hsl(157 5% 30% / ${alpha})`, //'hsl(157, 5%, 30%)'
  greenbluecayola: (alpha = 1) => `hsl(207 55% 65% / ${alpha})`, //'hsl(207, 55%, 65%)'
  greenbluecayoladark: (alpha = 1) => `hsl(207 35% 25% / ${alpha})`, //'hsl(207, 35%, 25%)'
  oldrose: (alpha = 1) => `hsl(8 40% 70% / ${alpha})`, //'hsl(8, 40%, 70%)'
  oldrosedark: (alpha = 1) => `hsl(8 20% 30% / ${alpha})`, //'hsl(8, 20%, 30%)'
  orhid: (alpha = 1) => `hsl(307 60% 60% / ${alpha})`, //'hsl(307, 60%, 60%)'
  orhiddark: (alpha = 1) => `hsl(307 40% 30% / ${alpha})`, //'hsl(307, 40%, 30%)'
  fontsize_48: '3rem',
  fontsize_36: '2rem',
  fontsize_24: '1.6rem',
  fontsize_18: '1.3rem',
  fontsize_16: '1rem',
  fontsize_14: '.8rem',
  timeline: '2000',
  // lessonColor: color => color,
};
