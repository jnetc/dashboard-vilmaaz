import styled from 'styled-components';

export const ModalStyle = styled.section`
  display: flex;
  justify-content: center;
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.bg_black()};
  z-index: 1000;

  & .wrapper {
    min-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 50px 10px;
  }
`;
