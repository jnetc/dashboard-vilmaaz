import styled from 'styled-components';

export const ScheduleDayStyle = styled.div<{ isEmptyRows: boolean }>`
  display: grid;
  grid-template-rows: ${({ isEmptyRows }) =>
    isEmptyRows ? '64px 56px' : '64px min-content 56px'};
  gap: 25px;
  ul {
    width: 100%;
    display: grid;
    grid-auto-rows: 56px;
    gap: inherit;
  }
`;
