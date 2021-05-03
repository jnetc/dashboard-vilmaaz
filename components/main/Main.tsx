import React, { forwardRef, HTMLProps } from 'react';
import styled from 'styled-components';

const MainStyle = styled.main`
  height: 100%;
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: 1fr minmax(50px, 350px);
  padding-top: 20px;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  div#timetable {
    min-width: ${({ theme }) => theme.timeline}px;
    height: 100%;
    display: grid;
    position: relative;
    grid-template-rows: 60px 1fr;
    &.will-change {
      will-change: transform;
    }
    &.animate {
      transition: transform 0.3s ease-in-out;
    }
  }
`;

export const MainContent = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement>
>((props, ref) => {
  return (
    <MainStyle id="main" ref={ref}>
      {props.children}
    </MainStyle>
  );
});
