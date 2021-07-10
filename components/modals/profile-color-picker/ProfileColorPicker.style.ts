import styled from 'styled-components';

export const ProfileColorPickerStyle = styled.fieldset`
  grid-column: 1 / -1;
  align-self: flex-start;
  grid-row: 3;
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  padding: 0 5px;
  position: relative;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.bg_light()};
  legend {
    padding: 0 10px;
    font-size: ${({ theme }) => theme.fontsize_16};
    color: ${({ theme }) => theme.grey_middle()};
  }
`;
