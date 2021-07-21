import styled from 'styled-components';

export const ModalCloseBtnStyle = styled.button`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 30px;
  right: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg_light()};
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
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover {
    &::before,
    &::after {
      background: ${({ theme }) => theme.white_soft()};
    }
    &::before {
      transform: translate(-50%, -50%) rotate(135deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;
