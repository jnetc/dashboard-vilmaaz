import styled, { keyframes, css } from 'styled-components';

export const InputFeaturesStyle = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  position: relative;
  user-select: none;
  z-index: 15;
  span {
    width: max-content;
    padding: 5px 10px;
    position: absolute;
    top: -27px;
    left: 50%;
    opacity: 0;
    border-radius: 3px;
    color: ${({ theme }) => theme.white_soft()};
    font-size: ${({ theme }) => theme.fontsize_14};
    font-weight: bold;
    background: ${({ theme }) => theme.bg_light()};
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;
  }
  &:hover span {
    opacity: 1;
  }
`;

export const Alert = styled(InputFeaturesStyle)`
  grid-column: 5;
  border-radius: 5px;
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.danger()};
  &::after {
    content: '!';
    position: absolute;
    top: 2.5px;
    left: 10.5px;
    color: ${({ theme }) => theme.danger()};
    font-weight: bold;
  }
`;

const animaSpan = keyframes`
0% {transform: translate(-50%, 0); }
25% {transform: translate(-53%, 0); }
50% {transform: translate(-47%, 0); }
75% {transform: translate(-53%, 0); }
100%{transform: translate(-50%, 0 );}
`;

export const Copy = styled(InputFeaturesStyle)<{ copy: boolean | undefined }>`
  grid-column: 5;
  position: relative;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }
  &::before {
    top: 2px;
    right: 2px;
    border: 2px solid ${({ theme }) => theme.white_soft()};
    z-index: 5;
  }
  &::after {
    bottom: 2px;
    left: 2px;
    border: 2px solid ${({ theme }) => theme.grey_middle()};
  }
  span {
    background: ${({ copy, theme }) => copy && theme.white_soft()};
    color: ${({ copy, theme }) => copy && theme.bg_black()};
    ${({ copy }) =>
      copy &&
      css`
        animation: ${animaSpan} 0.5s ease-out forwards;
      `};
  }
`;

export const Delete = styled(InputFeaturesStyle)`
  grid-column: 6;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    width: 22px;
    height: 3px;
    position: absolute;
    inset: 50%;
    background: ${({ theme }) => theme.danger()};
    transition: all 0.3s cubic-bezier(0.03, 1.63, 0.69, 1.43);
    border-radius: 50px;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
