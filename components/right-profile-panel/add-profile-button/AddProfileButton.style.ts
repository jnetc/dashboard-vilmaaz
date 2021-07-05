import styled from 'styled-components';

export const AddProfileButtonStyle = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.grey_dark()};
  box-shadow: 0 10px 20px ${({ theme }) => theme.bg_black(0.3)},
    0 20px 30px ${({ theme }) => theme.bg_black(0.2)};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    width: 2px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: ${({ theme }) => theme.grey_light()};
    transform: translate(-50%, -50%);
    transition: all 0.3s cubic-bezier(0.03, 1.63, 0.69, 1.43);
  }
  &::before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  &:hover {
    &::before,
    &::after {
      background: ${({ theme }) => theme.white()};
    }
    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
    &::before {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
`;
