// import original module declarations
import { DefaultTheme } from 'styled-components';

declare function AlphaChanel(alpha?: number): string;

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    white: typeof AlphaChanel;
    white_soft: typeof AlphaChanel;
    white_hard: typeof AlphaChanel;
    grey_light: typeof AlphaChanel;
    grey_middle: typeof AlphaChanel;
    grey_dark: typeof AlphaChanel;
    bg_light: typeof AlphaChanel;
    bg_soft: typeof AlphaChanel;
    bg_middle: typeof AlphaChanel;
    bg_dark: typeof AlphaChanel;
    bg_black: typeof AlphaChanel;
    primary: typeof AlphaChanel;
    primary_hover: typeof AlphaChanel;
    danger: typeof AlphaChanel;
    danger_hover: typeof AlphaChanel;
    pink: typeof AlphaChanel;
    green: typeof AlphaChanel;
    blue: typeof AlphaChanel;
    brown: typeof AlphaChanel;
    violet: typeof AlphaChanel;
    fontsize_48: string;
    fontsize_36: string;
    fontsize_24: string;
    fontsize_18: string;
    fontsize_16: string;
    fontsize_14: string;
    fontsize_13: string;
    border_radius: string;
  }
}

export const theme: DefaultTheme = {
  white: (alpha = 1) => `hsl(220 15% 100% / ${alpha})`, //'hsl(220, 15%, 100%)'
  white_soft: (alpha = 1) => `hsl(220 15% 97% / ${alpha})`, //'hsl(220, 15%, 93%)'
  white_hard: (alpha = 1) => `hsl(220 15% 85% / ${alpha})`, //'hsl(220, 15%, 85%)'
  grey_light: (alpha = 1) => `hsl(220 15% 74% / ${alpha})`, //'hsl(220, 15%, 74%)'
  grey_middle: (alpha = 1) => `hsl(220 15% 68% / ${alpha})`, //'hsl(220, 15%, 68%)'
  grey_dark: (alpha = 1) => `hsl(220 15% 37% / ${alpha})`, //'hsl(220, 15%, 37%)'
  bg_light: (alpha = 1) => `hsl(220 15% 24% / ${alpha})`, //'hsl(220, 15%, 24%)'
  bg_soft: (alpha = 1) => `hsl(220 15% 22% / ${alpha})`, //'hsl(220, 15%, 22%)'
  bg_middle: (alpha = 1) => `hsl(220 15% 20% / ${alpha})`, //'hsl(220, 15%, 20%)'
  bg_dark: (alpha = 1) => `hsl(220 15% 17% / ${alpha})`, //'hsl(220, 15%, 17%)'
  bg_black: (alpha = 1) => `hsl(220 15% 15% / ${alpha})`, //'hsl(220, 15%, 15%)'
  primary: (alpha = 1) => `hsl(127 28% 75% / ${alpha})`, // 'hsl(127, 28%, 75%)'
  primary_hover: (alpha = 1) => `hsl(127 28% 55% / ${alpha})`, //'hsl(127, 28%, 55%)'
  danger: (alpha = 1) => `hsl(346 90% 75% / ${alpha})`, //'hsl(346, 90%, 75%)'
  danger_hover: (alpha = 1) => `hsl(346 90% 55% / ${alpha})`, //'hsl(346, 90%, 55%)'
  pink: (alpha = 1) => `hsl(330 35% 65%/ ${alpha})`, //'hsl(330, 35%, 65%)'
  green: (alpha = 1) => `hsl(155 55% 65% / ${alpha})`, //'hsl(155, 35%, 65%)'
  blue: (alpha = 1) => `hsl(226 35% 65% / ${alpha})`, //'hsl(226, 35%, 65%)'
  brown: (alpha = 1) => `hsl(20 55% 65% / ${alpha})`, //'hsl(20, 35%, 65%)'
  violet: (alpha = 1) => `hsl(265 35% 65% / ${alpha})`, //'hsl(265, 35%, 65%)'
  // pink: (alpha = 1) => `hsl(346 90% 75%/ ${alpha})`, //'hsl(346, 90%, 75%)'
  // green: (alpha = 1) => `hsl(157 25% 60% / ${alpha})`, //'hsl(157, 25%, 60%)'
  // blue: (alpha = 1) => `hsl(207 55% 65% / ${alpha})`, //'hsl(207, 55%, 65%)'
  // brown: (alpha = 1) => `hsl(8 40% 70% / ${alpha})`, //'hsl(8, 40%, 70%)'
  // magenta: (alpha = 1) => `hsl(307 60% 60% / ${alpha})`, //'hsl(307, 60%, 60%)'
  fontsize_48: '48px',
  fontsize_36: '36px',
  fontsize_24: '24px',
  fontsize_18: '18px',
  fontsize_16: '16px', // 16px
  fontsize_14: '14px', // 14px
  fontsize_13: '13px', // 13px
  border_radius: '10px', //10px
};
