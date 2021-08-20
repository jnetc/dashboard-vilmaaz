import styled from 'styled-components';

interface Options {
  open: boolean;
  duration: number;
}

export const ModalStyle = styled.section<{ options: Options }>`
  display: flex;
  justify-content: center;
  position: fixed;
  inset: 0;
  opacity: ${({ options }) => (options.open ? 1 : 0)};
  background: ${({ theme }) => theme.bg_black()};
  transition: all ${({ options }) => options.duration}ms ease-in-out;
  z-index: 1000;

  & .wrapper {
    min-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 50px 10px;
  }
`;
