// import original module declarations
import { DefaultTheme } from 'styled-components';

declare function AlphaChanel(alpha?: number): string;

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    white: typeof AlphaChanel;
    grey_light: typeof AlphaChanel;
    grey_middle: typeof AlphaChanel;
    grey_dark: typeof AlphaChanel;
    grey_black: typeof AlphaChanel;
    progress: typeof AlphaChanel;
    bg_light: typeof AlphaChanel;
    bg_regular: typeof AlphaChanel;
    bg_middle: typeof AlphaChanel;
    bg_main: typeof AlphaChanel;
    bg_dark: typeof AlphaChanel;
    primary: typeof AlphaChanel;
    primary_hover: typeof AlphaChanel;
    danger: typeof AlphaChanel;
    danger_hover: typeof AlphaChanel;
    pink: typeof AlphaChanel;
    pink_shade: typeof AlphaChanel;
    green: typeof AlphaChanel;
    green_shade: typeof AlphaChanel;
    blue: typeof AlphaChanel;
    blue_shade: typeof AlphaChanel;
    brown: typeof AlphaChanel;
    brown_shade: typeof AlphaChanel;
    magenta: typeof AlphaChanel;
    magenta_shade: typeof AlphaChanel;
    fontsize_48: string;
    fontsize_36: string;
    fontsize_24: string;
    fontsize_18: string;
    fontsize_16: string;
    fontsize_14: string;
    timeline: string;
  }
}

export const theme: DefaultTheme = {
  white: (alpha = 1) => `hsl(0 0% 97% / ${alpha})`, //'hsl(0, 0%, 97%)'
  grey_light: (alpha = 1) => `hsl(240 0% 70% / ${alpha})`, //'hsl(240, 10%, 70%)'
  grey_middle: (alpha = 1) => `hsl(2400 0% 50% / ${alpha})`, //'hsl(240, 10%, 50%)'
  grey_dark: (alpha = 1) => `hsl(240 10% 40% / ${alpha})`, //'hsl(240, 10%, 40%)'
  grey_black: (alpha = 1) => `hsl(240 10% 25% / ${alpha})`, //'hsl(240, 10%, 25%)'
  progress: (alpha = 1) => `hsl(240 15% 27% / ${alpha})`, //'hsl(240, 15%, 27%)'
  bg_light: (alpha = 1) => `hsl(240 15% 24% / ${alpha})`, //'hsl(240, 15%, 24%)'
  bg_regular: (alpha = 1) => `hsl(240 15% 22% / ${alpha})`, //'hsl(240, 15%, 22%)'
  bg_middle: (alpha = 1) => `hsl(240 15% 20% / ${alpha})`, //'hsl(240, 15%, 20%)'
  bg_main: (alpha = 1) => `hsl(240 15% 17% / ${alpha})`, //'hsl(240, 15%, 17%)'
  bg_dark: (alpha = 1) => `hsl(244 15% 15% / ${alpha})`, //'hsl(244, 15%, 15%)'
  primary: (alpha = 1) => `hsl(127 28% 75% / ${alpha})`, // 'hsl(127, 28%, 75%)'
  primary_hover: (alpha = 1) => `hsl(127 28% 55% / ${alpha})`, //'hsl(127, 28%, 55%)'
  danger: (alpha = 1) => `hsl(346 90% 75% / ${alpha})`, //'hsl(346, 90%, 75%)'
  danger_hover: (alpha = 1) => `hsl(346 90% 55% / ${alpha})`, //'hsl(346, 90%, 55%)'
  pink: (alpha = 1) => `hsl(346 90% 75%/ ${alpha})`, //'hsl(346, 90%, 75%)'
  pink_shade: (alpha = 1) => `hsl(346 50% 30% / ${alpha})`, //'hsl(346, 50%, 30%)'
  green: (alpha = 1) => `hsl(157 25% 60% / ${alpha})`, //'hsl(157, 25%, 60%)'
  green_shade: (alpha = 1) => `hsl(157 5% 30% / ${alpha})`, //'hsl(157, 5%, 30%)'
  blue: (alpha = 1) => `hsl(207 55% 65% / ${alpha})`, //'hsl(207, 55%, 65%)'
  blue_shade: (alpha = 1) => `hsl(207 35% 25% / ${alpha})`, //'hsl(207, 35%, 25%)'
  brown: (alpha = 1) => `hsl(8 40% 70% / ${alpha})`, //'hsl(8, 40%, 70%)'
  brown_shade: (alpha = 1) => `hsl(8 20% 30% / ${alpha})`, //'hsl(8, 20%, 30%)'
  magenta: (alpha = 1) => `hsl(307 60% 60% / ${alpha})`, //'hsl(307, 60%, 60%)'
  magenta_shade: (alpha = 1) => `hsl(307 40% 30% / ${alpha})`, //'hsl(307, 40%, 30%)'
  fontsize_48: '3rem',
  fontsize_36: '2rem',
  fontsize_24: '1.6rem',
  fontsize_18: '1.3rem',
  fontsize_16: '1rem',
  fontsize_14: '.8rem',
  timeline: '2000',
};
