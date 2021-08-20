import styled from 'styled-components';

export const HeaderStyle = styled.header`
  grid-column: 1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  align-items: center;
  padding: 0 35px;
`;

export const SwitcherWrapper = styled.div`
  grid-column: 3;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.white_hard()};
  font-size: ${({ theme }) => theme.fontsize_14};
`;
