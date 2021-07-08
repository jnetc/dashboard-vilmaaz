import styled from 'styled-components';

export const ProfileButtonStyle = styled.button`
  grid-row: 4;
  width: 100%;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontsize_18};
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

export const ProfileButtonCancelStyle = styled(ProfileButtonStyle)`
  color: ${({ theme }) => theme.grey_light()};
  background: ${({ theme }) => theme.bg_light()};
  &:hover {
    background: ${({ theme }) => theme.bg_soft()};
  }
`;

export const ProfileButtonUpdateStyle = styled(ProfileButtonStyle)`
  color: ${({ theme }) => theme.bg_dark()};
  background: ${({ theme }) => theme.white()};
  &:hover {
    background: ${({ theme }) => theme.grey_light()};
  }
`;

export const ProfileButtonConfirmStyle = styled(ProfileButtonStyle)`
  color: ${({ theme }) => theme.bg_dark()};
  background: ${({ theme }) => theme.white()};
  &:hover {
    background: ${({ theme }) => theme.grey_light()};
  }
`;
