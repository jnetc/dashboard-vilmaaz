import React from 'react';
import styled from 'styled-components';

import { handleThemeSwitcher } from './ColorTheme';

// TYPES & INTERFACE
interface ButtonStyleType {
  isFill?: boolean;
  colorTheme: string;
}

type Styled = ({ isFill?: true } | { isFill: never }) &
  (
    | { colorTheme: 'primary' }
    | { colorTheme: 'default' }
    | { colorTheme: 'danger' }
  );

type Props = { children: React.ReactNode } & Styled;

// STYLES
const ButtonStyle = styled.button<ButtonStyleType>`
  padding: 15px 25px;
  font-size: ${props => props.theme.fontsize_18}px;
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

export const Button = (props: Props) => {
  return (
    <ButtonStyle isFill={props.isFill} colorTheme={props.colorTheme}>
      {props.children}
    </ButtonStyle>
  );
};
