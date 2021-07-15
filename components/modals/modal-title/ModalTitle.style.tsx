import styled from 'styled-components';

export const ModalTitleStyle = styled.h1`
  grid-row: 1;
  grid-column: 1 / -1;
  align-self: flex-start;
  font-size: ${({ theme }) => theme.fontsize_36};
  text-align: center;
`;
