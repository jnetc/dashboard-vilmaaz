import { FC } from 'react';
import styled from 'styled-components';
// Types
import { ButtonStyleType, Props } from './types';

import { handleThemeSwitcher } from './ColorTheme';

// STYLES
const ButtonStyle = styled.button<ButtonStyleType>`
  padding: 15px 25px;
  font-size: ${props => props.theme.fontsize_16};
  border-radius: 10px;
  color: ${props => (props.isFill ? props.theme.bg_main : props.theme.white)};
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
  outline: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  ${props => handleThemeSwitcher(props.colorTheme, props.isFill, props.theme)}
`;

export const Button: FC<Props> = ({ children, isFill, colorTheme }) => {
  return (
    <ButtonStyle isFill={isFill} colorTheme={colorTheme}>
      {children}
    </ButtonStyle>
  );
};
