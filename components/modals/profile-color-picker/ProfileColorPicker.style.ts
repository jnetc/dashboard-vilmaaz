import styled from 'styled-components';

export const ProfileColorPickerStyle = styled.fieldset`
  grid-column: 1 / -1;
  grid-row: 3;
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-around;
  position: relative;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.bg_light()};
  legend {
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontsize_16};
    color: ${({ theme }) => theme.grey_middle()};
  }
`;
