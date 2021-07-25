import styled from 'styled-components';

export const ScheduleLessonStyle = styled.li<{ styleErr: boolean }>`
  display: grid;
  grid-template-columns:
    repeat(3, min-content) 1fr
    repeat(2, min-content);
  align-items: center;
  gap: 10px;
  position: relative;
  padding: 0px 14px;
  border-radius: 8px;
  border: 2px solid
    ${({ styleErr, theme }) => (styleErr ? theme.danger() : theme.bg_light())};
  input {
    position: relative;
    color: ${({ theme }) => theme.white_soft()};
    font-size: ${({ theme }) => theme.fontsize_18};
    background: transparent;
    border: none;
    z-index: 1;
  }
  input:nth-of-type(1) {
    grid-column: 1;
  }
  span.separator {
    grid-column: 2;
  }
  input:nth-of-type(2) {
    grid-column: 3;
  }
  input:nth-of-type(1)::-webkit-calendar-picker-indicator,
  input:nth-of-type(2)::-webkit-calendar-picker-indicator {
    padding: 0 0 0 4px;
    margin: 0;
    filter: invert(50%);
  }
  input:nth-of-type(3) {
    grid-column: 4;
    padding: 8px;
    &::placeholder {
      color: ${({ theme }) => theme.grey_dark()};
      font-size: inherit;
    }
  }

  span.error-type {
    display: flex;
    padding: 0 10px;
    position: absolute;
    top: -8px;
    left: 40px;
    font-size: ${({ theme }) => theme.fontsize_14};
    color: ${({ styleErr, theme }) =>
      styleErr ? theme.danger() : theme.grey_middle()};
    background: ${({ theme }) => theme.bg_black()};
  }
`;
