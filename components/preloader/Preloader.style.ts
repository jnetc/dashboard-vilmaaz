import styled, { keyframes } from 'styled-components';

const preloaderAnimationIcon = keyframes`
  100% {transform: rotate(360deg)};
`;

const preloaderAnimationFadeOut = keyframes`
  50%{opacity: 1}
  100% {opacity:0};
`;

export const PreloaderStyle = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.bg_black()};
  color: ${({ theme }) => theme.white_soft()};
  z-index: 99999;

  #preloader-box {
    display: inherit;
    place-items: inherit;
    gap: 1rem;
  }
  #preloader-icon {
    width: 3rem;
    height: 3rem;
    border: 5px solid transparent;
    border-radius: 50%;
    border-bottom-color: ${({ theme }) => theme.white_soft()};
    border-top-color: ${({ theme }) => theme.white_soft()};
    animation: ${preloaderAnimationIcon} 2s linear infinite;
  }
  #preloader p {
    width: min-content;
  }

  &.hide-preloader {
    animation: ${preloaderAnimationFadeOut} 1s ease-in forwards;
  }
`;
