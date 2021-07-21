import styled from 'styled-components';

export const ScheduleLessonStyle = styled.li<{ styleErr: boolean }>`
  width: 100%;
  /* display: grid;
  grid-column: 2rem 5px 2rem 5px 2rem 5px 2rem 1fr repeat(3, 25px); */
  display: inline-flex;
  align-items: center;
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
    &::placeholder {
      color: ${({ theme }) => theme.grey_dark()};
      font-size: inherit;
    }
  }
  input:nth-of-type(1),
  input:nth-of-type(2),
  input:nth-of-type(3),
  input:nth-of-type(4) {
    padding: 8px 0px 8px 6px;
    width: 2rem;
  }
  input:nth-of-type(5) {
    flex-grow: 1;
    padding: 8px;
    margin-right: 14px;
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
