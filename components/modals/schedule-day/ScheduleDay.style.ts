import styled from 'styled-components';

export const ScheduleDayStyle = styled.div<{ isEmptyRows: boolean }>`
  display: grid;
  grid-template-rows: ${({ isEmptyRows }) =>
    isEmptyRows ? '64px 56px' : '64px min-content 56px'};
  gap: 25px;
  position: relative;
  label {
    position: relative;
    .day-label-info {
      width: max-content;
      position: absolute;
      top: -15px;
      left: 15px;
      padding: 10px 15px;
      opacity: 0;
      border-radius: 5px;
      background: ${({ theme }) => theme.bg_soft()};
      color: ${({ theme }) => theme.white_soft()};
      font-size: ${({ theme }) => theme.fontsize_13};
      font-weight: 300;
      box-shadow: 0 5px 5px ${({ theme }) => theme.bg_dark(0.5)},
        0 15px 15px ${({ theme }) => theme.bg_dark(0.2)};
      transition: all 0.3s ease-in-out;
      pointer-events: none;
      z-index: 10;
    }
    &:hover .day-label-info {
      opacity: 1;
    }
  }
  ul {
    width: 100%;
    display: grid;
    grid-auto-rows: 56px;
    gap: inherit;
  }
`;
