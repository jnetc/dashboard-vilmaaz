import styled from 'styled-components';

export const CreateProfileStyle = styled.form`
  min-width: 300px;
  display: grid;
  grid-template-rows: 200px 50px 73px 70px;
  gap: 30px;
  place-items: center;
  user-select: none;
  input {
    grid-row: 2;
    width: 100%;
    padding: 8px 13px;
    border-radius: 8px;
    color: ${({ theme }) => theme.white()};
    font-size: ${({ theme }) => theme.fontsize_24};
    border: none;
    background: ${({ theme }) => theme.bg_middle()};
  }
  button {
    grid-row: 4;
    padding: 15px 30px;
    border-radius: 8px;
    color: ${({ theme }) => theme.bg_dark()};
    font-size: ${({ theme }) => theme.fontsize_18};
    font-weight: bold;
    background: ${({ theme }) => theme.white()};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.grey_light()};
    }
  }
`;

export const UploadAvatarStyle = styled.label`
  grid-row: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 15px;
  border: 5px dashed ${({ theme }) => theme.bg_light()};
  transition: all 0.3s ease-in-out;

  cursor: pointer;
  span {
    position: absolute;
    bottom: 15px;
    font-size: ${({ theme }) => theme.fontsize_16};
    color: ${({ theme }) => theme.grey_middle()};
  }
  input {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
  &:hover {
    border-color: ${({ theme }) => theme.grey_dark()};
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

export const ColorPickerStyle = styled.fieldset`
  grid-row: 3;
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-around;
  position: relative;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.bg_light()};
  legend {
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontsize_16};
    color: ${({ theme }) => theme.grey_middle()};
  }
  input {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
  input:checked + label::after {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 1;
  }
  label {
    width: 31px;
    height: 31px;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    &::after {
      content: '';
      width: inherit;
      height: inherit;
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
      border-radius: 50%;
      background: ${({ theme }) => theme.bg_middle()};
      transition: all 0.5s cubic-bezier(0, 2, 0.5, 0.9);
    }
  }
  label[data-color='brown'] {
    background: ${({ theme }) => theme.brown()};
    box-shadow: 0 5px 10px ${({ theme }) => theme.brown(0.2)},
      0 10px 20px ${({ theme }) => theme.brown(0.15)};
  }
  label[data-color='green'] {
    background: ${({ theme }) => theme.green()};
    box-shadow: 0 5px 10px ${({ theme }) => theme.green(0.2)},
      0 10px 20px ${({ theme }) => theme.green(0.15)};
  }
  label[data-color='pink'] {
    background: ${({ theme }) => theme.pink()};
    box-shadow: 0 5px 10px ${({ theme }) => theme.brown(0.2)},
      0 10px 20px ${({ theme }) => theme.brown(0.15)};
  }
  label[data-color='violet'] {
    background: ${({ theme }) => theme.violet()};
    box-shadow: 0 5px 10px ${({ theme }) => theme.violet(0.2)},
      0 10px 20px ${({ theme }) => theme.violet(0.15)};
  }
  label[data-color='blue'] {
    background: ${({ theme }) => theme.blue()};
    box-shadow: 0 5px 10px ${({ theme }) => theme.blue(0.2)},
      0 10px 20px ${({ theme }) => theme.blue(0.15)};
  }
`;
