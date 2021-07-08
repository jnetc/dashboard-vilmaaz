import styled from 'styled-components';

export const ProfileNameStyle = styled.fieldset<{ styleErr: boolean }>`
  grid-column: 1 / -1;
  grid-row: 2;
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-around;
  position: relative;
  border-radius: 8px;
  padding: 0px 5px;
  border: 2px solid
    ${({ styleErr, theme }) => (styleErr ? theme.danger() : theme.bg_light())};

  legend {
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontsize_16};
    color: ${({ theme }) => theme.grey_middle()};
    background: transparent;
  }
  input {
    width: 100%;
    padding: 8px 13px;
    margin-bottom: 10px;
    border-radius: 8px;
    color: ${({ theme }) => theme.white()};
    font-size: ${({ theme }) => theme.fontsize_24};
    background: transparent;
    border: none;
    outline: none;
  }
  small {
    position: absolute;
    left: 0;
    bottom: -25px;
    color: ${({ theme }) => theme.danger()};
  }
`;
