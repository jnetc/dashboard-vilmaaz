import { FC, MouseEvent } from 'react';
import styled, { keyframes } from 'styled-components';

const uparrow = keyframes`
  50% {transform: translate(-50%, -20px); opacity: 0};
  95% {transform: translate(-50%, 0px); opacity: 0}
  100% {transform: translate(-50%, 0px); opacity: 1}
`;
const downarrow = keyframes`
  50% {transform: translate(-50%, 20px); opacity: 0};
  95% {transform: translate(-50%, 0px); opacity: 0}
  100% {transform: translate(-50%, 0px); opacity: 1}
`;

const DraggableElementStyle = styled.div`
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

  &:not(:first-of-type):before,
  &:not(:last-of-type):after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-style: solid;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }
  &:not(:first-of-type):before {
    top: -20px;
    border-width: 0 5px 10px 5px;
    border-color: transparent transparent transparent transparent;
  }
  &:not(:last-of-type):after {
    bottom: -20px;
    border-width: 10px 5px 0 5px;
    border-color: transparent transparent transparent transparent;
  }

  &:hover {
    color: ${({ theme }) => theme.primary()};
    border-color: ${({ theme }) => theme.primary()};
    box-shadow: 0 5px 5px ${({ theme }) => theme.primary(0.15)},
      0 20px 20px ${({ theme }) => theme.primary(0.1)};

    &:not(:first-of-type):before {
      animation: ${uparrow} 3s ease-in-out infinite;
      border-color: transparent transparent ${({ theme }) => theme.primary()}
        transparent;
    }
    &:not(:last-of-type):after {
      animation: ${downarrow} 3s ease-in-out infinite;
      border-color: ${({ theme }) => theme.primary()} transparent transparent
        transparent;
    }
  }
`;

export type DraggableElementType = {
  data: {
    id: string;
    order: number;
  };
};

export const DraggableElement: FC<DraggableElementType> = ({ data }) => {
  function mouseDown(ev: MouseEvent): void {
    const element = ev.target as HTMLDivElement;
    element.draggable = true;
  }
  function mouseUp(ev: MouseEvent): void {
    const element = ev.target as HTMLDivElement;
    element.removeAttribute('draggable');
  }
  return (
    <DraggableElementStyle
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      className="order-lesson">
      {data.order}
    </DraggableElementStyle>
  );
};
