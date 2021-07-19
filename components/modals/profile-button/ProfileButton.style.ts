import styled from 'styled-components';

interface Pos {
  row: number;
  col: number;
}

export const ProfileButtonStyle = styled.button<{ pos: Pos }>`
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

export const ProfileButtonDisableStyle = styled(ProfileButtonStyle)`
  color: ${({ theme }) => theme.grey_dark()};
  border-color: ${({ theme }) => theme.grey_dark()};
  cursor: default;
`;

export const ProfileButtonResetStyle = styled(ProfileButtonStyle)`
  justify-self: flex-end;
  color: ${({ theme }) => theme.grey_light()};
  background: ${({ theme }) => theme.bg_light()};
  &:hover {
    background: ${({ theme }) => theme.bg_soft()};
  }
`;

export const ProfileButtonUpdateStyle = styled(ProfileButtonStyle)`
  color: ${({ theme }) => theme.bg_dark()};
  background: ${({ theme }) => theme.white_soft()};
  &:hover {
    background: ${({ theme }) => theme.grey_light()};
  }
`;

export const ProfileButtonConfirmStyle = styled(ProfileButtonStyle)`
  color: ${({ theme }) => theme.bg_dark()};
  background: ${({ theme }) => theme.white_soft()};
  &:hover {
    background: ${({ theme }) => theme.white()};
  }
`;
