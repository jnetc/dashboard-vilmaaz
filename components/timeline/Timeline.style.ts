import styled from 'styled-components';

export const TimelineStyle = styled.div<{ hours: number }>`
  /* width: calc(${({ hours }) => hours}px + 300px); */
  width: ${({ hours }) => hours}px;
  max-height: inherit;
  min-height: calc(100vh - 115px);
  display: grid;
  position: relative;
  grid-template-rows: 60px 1fr;
  padding: 0 120px 0 2px;
  z-index: 1;
  user-select: none;
  cursor: move;
  &.animate {
    transition: transform 0.3s ease-in-out;
  }
`;

export const MainStyle = styled.main`
  grid-column: 1;
  grid-row: 2;
  width: 100%;
  min-height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 40px 40px ${({ theme }) => theme.bg_black(0.2)},
    0px 10px 10px ${({ theme }) => theme.bg_black(0.3)};
  &.opacity {
    filter: opacity(40%);
  }
`;

export const TimelineEmptyStyle = styled.h2`
  grid-column: 1;
  grid-row: 2;
  place-self: center;
`;
