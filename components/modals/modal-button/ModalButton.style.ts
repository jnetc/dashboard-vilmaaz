import styled from 'styled-components';

interface Pos {
  row: number;
  col: number;
}

export const ModalButtonStyle = styled.button<{ pos: Pos }>`
  grid-row: ${({ pos }) => pos.row};
  align-self: flex-start;
  justify-self: flex-start;
  min-width: 235px;
  padding: 15px 30px;
  border-radius: 8px;
  border: 2px solid transparent;
  font-size: ${({ theme }) => theme.fontsize_18};
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.white()};
  }
`;

export const ModalButtonDisableStyle = styled(ModalButtonStyle)`
  color: ${({ theme }) => theme.grey_dark()};
  border-color: ${({ theme }) => theme.grey_dark()};
  cursor: default;
`;

export const ModalButtonResetStyle = styled(ModalButtonStyle)`
  justify-self: flex-end;
  color: ${({ theme }) => theme.grey_light()};
  background: ${({ theme }) => theme.bg_light()};
  &:hover {
    background: ${({ theme }) => theme.bg_soft()};
  }
`;

export const ModalButtonUpdateStyle = styled(ModalButtonStyle)`
  color: ${({ theme }) => theme.bg_dark()};
  background: ${({ theme }) => theme.white_soft()};
  &:hover {
    background: ${({ theme }) => theme.grey_light()};
  }
`;

export const ModalButtonConfirmStyle = styled(ModalButtonStyle)`
  color: ${({ theme }) => theme.bg_dark()};
  background: ${({ theme }) => theme.white_soft()};
  &:hover {
    background: ${({ theme }) => theme.white()};
  }
`;
