import styled, { keyframes } from 'styled-components';

//* index => component
export const LeftSidePanelStyle = styled.div`
  min-width: 140px;
  display: grid;
  justify-content: center;
  grid-template-rows: 60px 1fr;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 35px;
  background-color: ${({ theme }) => theme.bg_middle(0.8)};
  backdrop-filter: blur(4px);
  z-index: 100;
  /* pointer-events: none; */
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    pointer-events: none;
  }
  &::after {
    width: 20px;
    right: -20px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.bg_middle(1)} 0%,
      ${({ theme }) => theme.bg_middle(0)} 100%
    );
  }
  &::before {
    width: 100px;
    left: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.bg_middle(1)} 0%,
      ${({ theme }) => theme.bg_middle(0)} 100%
    );
  }
`;

//* DRAGGABLE AREA => component
export const DraggableAreaStyle = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 70px 0;
  gap: 4rem;
`;

const uparrow = keyframes`
0% { opacity: 1};
100% {transform: translate(-50%, -20px); opacity: 0};
`;
const downarrow = keyframes`
0% { opacity: 1}
100% {transform: translate(-50%, 20px); opacity: 0};
`;

export const DraggableElementStyle = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 1rem;
  background: ${({ theme }) => theme.bg_middle()};
  border: 2px solid ${({ theme }) => theme.bg_light()};
  box-shadow: 0 5px 5px ${({ theme }) => theme.bg_dark(0.15)},
    0 20px 20px ${({ theme }) => theme.bg_dark(0.1)};
  transition: all 0.3s ease-in-out;
  cursor: grab;
  user-select: none;
  z-index: 5;

  &:not(:first-of-type):before,
  &:not(:last-of-type):after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-style: solid;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, 0px);
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }
  &:not(:first-of-type):before {
    top: -15px;
    border-width: 0 5px 10px 5px;
    border-color: transparent transparent transparent transparent;
  }
  &:not(:last-of-type):after {
    bottom: -15px;
    border-width: 10px 5px 0 5px;
    border-color: transparent transparent transparent transparent;
  }

  &:hover {
    color: ${({ theme }) => theme.primary()};
    border-color: ${({ theme }) => theme.primary()};
    box-shadow: 0 5px 5px ${({ theme }) => theme.primary(0.15)},
      0 20px 20px ${({ theme }) => theme.primary(0.1)};

    &:not(:first-of-type):before {
      animation: ${uparrow} 0.5s cubic-bezier(1, 0.11, 0.26, 0.26);
      border-color: transparent transparent ${({ theme }) => theme.primary()}
        transparent;
    }
    &:not(:last-of-type):after {
      animation: ${downarrow} 0.5s cubic-bezier(1, 0.11, 0.26, 0.26);
      border-color: ${({ theme }) => theme.primary()} transparent transparent
        transparent;
    }
  }

  &.hovered {
    border-bottom-color: ${({ theme }) => theme.primary()};
    border-top-color: ${({ theme }) => theme.primary()};
    border-left-color: none;
    border-right-color: none;
    transform: scale(1.2);
  }
  &:active {
    border: 2px solid ${({ theme }) => theme.bg_light()};
    box-shadow: 0 5px 5px ${({ theme }) => theme.bg_dark(0.15)},
      0 20px 20px ${({ theme }) => theme.bg_dark(0.1)};

    &:not(:first-of-type):before,
    &:not(:last-of-type):after {
      animation: none;
    }
  }
`;
