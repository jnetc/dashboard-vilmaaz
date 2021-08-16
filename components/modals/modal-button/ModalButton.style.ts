import styled from 'styled-components';

interface Pos {
  row: string;
  col: string;
  selfStretch?: boolean;
}

export const ModalButtonStyle = styled.button<{ pos: Pos }>`
  grid-row: ${({ pos }) => pos.row};
  grid-column: ${({ pos }) => pos.col};
  align-self: flex-start;
  justify-self: ${({ pos }) => (pos.selfStretch ? 'stretch' : 'flex-start')};
  min-width: 235px;
  padding: 15px 30px;
  border-radius: 8px;
  position: relative;
  border: 2px solid transparent;
  font-size: ${({ theme }) => theme.fontsize_18};
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &::after {
    content: attr(aria-label);
    width: max-content;
    position: absolute;
    top: -25px;
    left: 0%;
    padding: 10px 15px;
    opacity: 0;
    background: ${({ theme }) => theme.bg_soft()};
    color: ${({ theme }) => theme.white_soft()};
    font-size: ${({ theme }) => theme.fontsize_13};
    font-weight: 300;
    transform: translate(0%, -50%);
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }
  &:hover::after {
    opacity: 1;
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
