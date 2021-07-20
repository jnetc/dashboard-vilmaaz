import styled from 'styled-components';

export const ModalStyle = styled.section`
  display: flex;
  justify-content: center;
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.bg_black()};
  overflow: hidden;
  z-index: 1000;

  & .wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    padding: 50px 10px;
  }
`;
