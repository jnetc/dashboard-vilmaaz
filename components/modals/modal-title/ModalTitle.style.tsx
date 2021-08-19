import styled from 'styled-components';

export const ModalHeaderStyle = styled.header`
  grid-row: 1;
  grid-column: 1 / -1;
  align-self: flex-start;
`;

export const Titleh1Style = styled.h1`
  font-size: ${({ theme }) => theme.fontsize_36};
  text-align: center;
`;
export const Titleh4Style = styled.h4`
  margin-top: 1rem;
  color: ${({ theme }) => theme.grey_light()};
  font-size: ${({ theme }) => theme.fontsize_14};
  text-align: center;
`;
