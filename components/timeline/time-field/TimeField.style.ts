import styled from 'styled-components';

export const TimeFieldStyle = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  padding: 70px 0px 70px 46px;
  gap: ${({ theme }) => theme.fontsize_48};
  position: relative;
`;
