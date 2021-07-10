import styled from 'styled-components';

export const UploadAvatarStyle = styled.label<{ styleErr: boolean }>`
  grid-column: 1 / -1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 15px;
  border: 3px dashed
    ${({ styleErr, theme }) => (styleErr ? theme.danger() : theme.bg_light())};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  z-index: 10;
  &::after {
    content: attr(aria-label);
    position: absolute;
    bottom: 25px;
    font-size: ${({ theme }) => theme.fontsize_14};
    color: ${({ styleErr, theme }) =>
      styleErr ? theme.danger() : theme.grey_middle()};
    background: ${({ theme }) => theme.bg_black()};
  }
  &:hover {
    border-color: ${({ styleErr, theme }) =>
      styleErr ? theme.danger() : theme.grey_dark()};
  }
  &:focus {
    border-color: ${({ theme }) => theme.grey_dark()};
  }
`;

export const UploadInputAvatarStyle = styled.input<{ styleErr: boolean }>`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  min-width: inherit;
  opacity: 0;
  position: absolute;
  inset: 0;
  border-radius: 15px;
  z-index: -1;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    border-color: ${({ styleErr, theme }) =>
      styleErr ? theme.danger() : theme.grey_dark()};
  }
`;

export const ProfileAvatarStyle = styled.figure`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -25px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg_light()};
  color: ${({ theme }) => theme.white_soft()};
  &::after {
    content: attr(aria-label);
    width: 300%;
    position: absolute;
    bottom: -55px;
    color: ${({ theme }) => theme.grey_middle()};
    font-size: ${({ theme }) => theme.fontsize_14};
    text-align: center;
  }
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: inherit;
  }
  figcaption {
    font-size: ${({ theme }) => theme.fontsize_48};
  }
`;
