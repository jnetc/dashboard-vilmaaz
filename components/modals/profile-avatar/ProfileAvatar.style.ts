import styled, { css } from 'styled-components';

export const AvatarStyle = styled.div<{ styleErr: boolean }>`
  grid-column: 1 / -1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  p {
    font-size: ${({ theme }) => theme.fontsize_14};
    color: ${({ theme }) => theme.grey_middle()};
  }
  p#upload-warning {
    margin-top: 10px;
    color: ${({ styleErr, theme }) =>
      styleErr ? theme.danger() : theme.grey_middle()};
  }
`;

const AvatarButtons = css`
  width: 4em;
  height: 4em;
  position: absolute;
  bottom: 0;
  background: ${({ theme }) => theme.bg_light()};
  border: 6px solid ${({ theme }) => theme.bg_black()};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    width: 15px;
    height: 2px;
    position: absolute;
    inset: 50%;
    background: ${({ theme }) => theme.grey_light()};
    transition: all 0.3s cubic-bezier(0.03, 1.63, 0.69, 1.43);
  }
  &:hover {
    background: ${({ theme }) => theme.grey_dark()};
  }
`;

export const UploadAvatarStyle = styled.label`
  ${AvatarButtons}
  right: 0;
  &::before {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  input {
    width: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const DeleteAvatarStyle = styled.div`
  ${AvatarButtons}
  left: 0;
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const ProfileAvatarStyle = styled.figure`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 25px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg_light()};
  color: ${({ theme }) => theme.white_soft()};

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: inherit;
    isolation: isolate;
  }
  figcaption {
    font-size: 5em;
  }
`;
