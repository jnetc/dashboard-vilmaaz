import React, { MouseEvent } from 'react';

// export type Props = {
//   children: ReactNode;
// };

export type Event = {
  ev: MouseEvent<HTMLDivElement> | globalThis.MouseEvent;
};

export type MouseMoveEvents = {
  child: HTMLDivElement | null;
  parent?: HTMLDivElement | null;
  startMove?: boolean;
  setStartMove?: React.Dispatch<React.SetStateAction<boolean>>;
  maxPositionElement?: number;
  setMaxPositionElement?: React.Dispatch<React.SetStateAction<number>>;
  currentPositionElement?: number;
  setCurrentPositionElement?: React.Dispatch<React.SetStateAction<number>>;
  mouseDownCursorPos?: number;
  setMouseDownCursorPos?: React.Dispatch<React.SetStateAction<number>>;
} & Event;
