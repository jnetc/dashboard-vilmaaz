import styled from 'styled-components';

export const ModalStyle = styled.section<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.bg_black()};
  opacity: 0.95;
  overflow: hidden;
  z-index: 1000;
  & .wrapper {
    /* width: 100%; */
    /* overflow: auto; */
    margin: auto;
  }
`;
