import { theme } from '@styles/theme';

export const handleThemeSwitcher = (
  themeName: string,
  fill: boolean | undefined,
  props: typeof theme
) => {
  switch (themeName) {
    case 'primary':
      if (fill) {
        return `
        border-color: transparent;
        background-color: ${props.primary}:
        &:hover {
          background-color: ${props.primary_hover};
        }`;
      }
      return `
        border-color: ${props.primary};
        box-shadow: 0px 20px 20px ${props.shadow_primary(
          0.05
        )}, 0px 5px 5px ${props.shadow_primary(0.2)};
        &:hover {
          border-color: ${props.primary_hover};
          box-shadow: 0px 20px 20px ${props.shadow_primary_hover(
            0.05
          )}, 0px 5px 5px ${props.shadow_primary_hover(0.2)}
        }`;

    case 'default':
      if (fill) {
        return `
        border-color: transparent;
        background-color: ${props.grey_dark};
        color: ${props.grey_light};`;
      }
      return `
        border-color: ${props.grey_dark};
        color: ${props.grey_light};`;

    case 'danger':
      if (fill) {
        return `
        border-color: transparent;
        background-color: ${props.danger};
        &:hover {
          background-color: ${props.danger_hover};
        }`;
      }
      return `
        border-color: ${props.danger};
        box-shadow: 0px 20px 20px ${props.shadow_danger(
          0.05
        )}, 0px 5px 5px ${props.shadow_danger(0.2)};
        &:hover {
          border-color: ${props.danger_hover};
          box-shadow: 0px 20px 20px ${props.shadow_danger_hover(
            0.05
          )}, 0px 5px 5px ${props.shadow_danger_hover(0.2)}
        }`;

    default:
      break;
  }
};
