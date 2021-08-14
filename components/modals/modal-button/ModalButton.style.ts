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
  color: ${({ theme }) => theme.primary()};
  border-color: ${({ theme }) => theme.primary()};
  &:hover {
    border-color: ${({ theme }) => theme.primary_hover()};
    color: ${({ theme }) => theme.primary_hover()};
  }
`;
export const ModalButtonDeleteStyle = styled(ModalButtonStyle)`
  color: ${({ theme }) => theme.danger()};
  border-color: ${({ theme }) => theme.danger()};
  &:hover {
    border-color: ${({ theme }) => theme.danger_hover()};
    color: ${({ theme }) => theme.danger_hover()};
  }
`;

export const ModalButtonConfirmStyle = styled(ModalButtonStyle)`
  color: ${({ theme }) => theme.bg_dark()};
  background: ${({ theme }) => theme.white_soft()};
  &:hover {
    background: ${({ theme }) => theme.white()};
  }
`;
