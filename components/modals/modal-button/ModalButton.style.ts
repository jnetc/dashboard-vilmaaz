import styled, { css } from 'styled-components';

interface Options {
  row: string;
  col: string;
  selfStretch?: boolean;
  tooltip?: string;
}

const tooltipProperty = css`
  &::after {
    content: attr(aria-label);
    width: max-content;
    position: absolute;
    top: -43px;
    left: -2px;
    padding: 10px 15px;
    opacity: 0;
    border-radius: 5px;
    background: ${({ theme }) => theme.bg_soft()};
    color: ${({ theme }) => theme.danger()};
    font-size: ${({ theme }) => theme.fontsize_13};
    font-weight: 300;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
    z-index: 1;
  }
  &:hover::after {
    opacity: 1;
  }
`;

export const ModalButtonStyle = styled.button<{ options: Options }>`
  grid-row: ${({ options }) => options.row};
  grid-column: ${({ options }) => options.col};
  align-self: flex-start;
  justify-self: ${({ options }) =>
    options.selfStretch ? 'stretch' : 'flex-start'};
  min-width: 235px;
  padding: 15px 30px;
  border-radius: 8px;
  position: relative;
  border: 2px solid transparent;
  font-size: ${({ theme }) => theme.fontsize_18};
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  ${({ options }) => options.tooltip && tooltipProperty}
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
