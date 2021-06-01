import { css, DefaultTheme } from 'styled-components';

export const handleThemeSwitcher = (
  themeName: string,
  fill: boolean | undefined,
  theme: DefaultTheme
) => {
  switch (themeName) {
    case 'primary':
      if (fill) {
        return css`
          border-color: transparent;
          background-color: ${theme.primary()};
          &:hover {
            background-color: ${theme.primary_hover()};
          }
        `;
      }
      return css`
        border-color: ${theme.primary()};
        box-shadow: 0px 20px 20px ${theme.primary(0.05)},
          0px 5px 5px ${theme.primary(0.2)};
        &:hover {
          border-color: ${theme.primary_hover()};
          box-shadow: 0px 20px 20px ${theme.primary_hover(0.05)},
            0px 5px 5px ${theme.primary_hover(0.2)};
        }
      `;

    case 'default':
      if (fill) {
        return css`
          border-color: transparent;
          background-color: ${theme.grey_dark()};
          color: ${theme.grey_light()};
        `;
      }
      return css`
        border-color: ${theme.grey_dark()};
        color: ${theme.grey_light()};
      `;

    case 'danger':
      if (fill) {
        return css`
          border-color: transparent;
          background-color: ${theme.danger()};
          &:hover {
            background-color: ${theme.danger_hover()};
          }
        `;
      }
      return css`
        border-color: ${theme.danger()};
        box-shadow: 0px 20px 20px ${theme.danger(0.05)},
          0px 5px 5px ${theme.danger(0.2)};
        &:hover {
          border-color: ${theme.danger_hover()};
          box-shadow: 0px 20px 20px ${theme.danger_hover(0.05)},
            0px 5px 5px ${theme.danger_hover(0.2)};
        }
      `;

    default:
      break;
  }
};
