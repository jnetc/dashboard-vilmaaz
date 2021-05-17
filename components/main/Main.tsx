import React, { forwardRef, HTMLProps } from 'react';
import styled from 'styled-components';

const MainStyle = styled.main`
  width: 100%;
  min-height: 100%;
  padding: 20px 0 0 140px;
  /* padding: 20px 0 0 70px; */
  border-radius: 30px 0 0 30px;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.bg_middle()};
  box-shadow: 0px 40px 40px ${props => props.theme.bg_dark(0.2)},
    0px 10px 10px ${props => props.theme.bg_dark(0.3)};
  &::after,
  &::before {
    content: '';
    width: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
  &::after {
    left: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.bg_middle(0.5)} 0%,
      ${({ theme }) => theme.bg_middle(0)} 100%
    );
  }
  &::before {
    right: 0;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.bg_middle()} 0%,
      ${({ theme }) => theme.bg_middle(0)} 100%
    );
  }
`;
// const MainStyle = styled.main`
//   width: 100%;
//   height: 100%;
//   /* grid-column: 1 / 2; */
//   padding-top: 20px;
//   position: relative;
//   overflow: hidden;
//   position: relative;
//   &::after,
//   &::before {
//     content: '';
//     width: 20px;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     z-index: 1;
//   }
//   &::after {
//     left: 0;
//     background: linear-gradient(
//       to right,
//       ${({ theme }) => theme.bg_middle(0.5)} 0%,
//       ${({ theme }) => theme.bg_middle(0)} 100%
//     );
//   }
//   &::before {
//     right: 0;
//     background: linear-gradient(
//       to left,
//       ${({ theme }) => theme.bg_middle()} 0%,
//       ${({ theme }) => theme.bg_middle(0)} 100%
//     );
//   }
// `;

export const MainContent = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement>
>((props, ref) => {
  return <MainStyle ref={ref}>{props.children}</MainStyle>;
});
