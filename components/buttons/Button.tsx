import { FC } from 'react';
import styled from 'styled-components';
// Types
import { ButtonStyleType, ButtonProps } from '@types';

import { handleThemeSwitcher } from './ColorTheme';

// STYLES
const ButtonStyle = styled.button<ButtonStyleType>`
  padding: 15px 25px;
  font-size: ${props => props.theme.fontsize_16};
  border-radius: 10px;
  color: ${props =>
    props.isFill ? props.theme.bg_dark() : props.theme.white()};
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
  outline: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  ${({ colorTheme, isFill, theme }) =>
    handleThemeSwitcher(colorTheme, isFill, theme)}
`;

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  isFill,
  colorTheme,
}) => {
  return (
    <ButtonStyle isFill={isFill} colorTheme={colorTheme} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};
