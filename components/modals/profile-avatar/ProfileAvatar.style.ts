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
  &::after {
    content: attr(aria-label);
    position: absolute;
    bottom: 12px;
    color: ${({ theme }) => theme.grey_middle()};
    background: ${({ theme }) => theme.bg_black()};
  }

  input {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
  &:hover {
    border-color: ${({ styleErr, theme }) =>
      styleErr ? theme.danger() : theme.grey_dark()};
  }
`;

export const ProfileAvatarStyle = styled.figure`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg_light()};
  color: ${({ theme }) => theme.white()};
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: inherit;
  }
  figcaption {
    font-size: ${({ theme }) => theme.fontsize_36};
  }
`;
