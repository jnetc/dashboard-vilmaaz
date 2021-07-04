import styled, { keyframes } from 'styled-components';

const expandRight = keyframes`
0% {width: 18px; transform: translateX(22px)}
50% {width: 40px; transform: translateX(0px)}
100% {width: 18px transform: translateX(0px)}
`;

const expandLeft = keyframes`
0% {width: 18px; transform: translateX(0px)}
50% {width: 40px; transform: translateX(0px)}
100% {width: 18px transform: translateX(22px)}
`;

export const SwitcherStyle = styled.label`
  width: 48px;
  height: 26px;
  display: flex;
  position: relative;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.grey_dark()};
  cursor: pointer;
  input {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    z-index: -1;
  }
  & .slider {
    width: 18px;
    height: 18px;
    border-radius: 50px;
    position: relative;
    top: 2px;
    left: 2px;
    background: ${({ theme }) => theme.grey_middle()};
    transition: all 0.3s ease-in-out;
    z-index: 10;
  }
  span {
    position: absolute;
    top: 6px;
    font-size: 10px;
    color: ${({ theme }) => theme.grey_light()};
  }
  span:nth-of-type(1) {
    left: 6px;
  }
  span:nth-of-type(2) {
    right: 6px;
  }
  input:not(:checked) ~ .slider {
    transform: translateX(0);
    background: ${({ theme }) => theme.grey_dark()};
    animation: ${expandRight} 0.5s ease-in-out forwards;
  }
  input:checked ~ .slider {
    transform: translateX(22px);
    animation: ${expandLeft} 0.5s ease-in-out forwards;
  }
`;
