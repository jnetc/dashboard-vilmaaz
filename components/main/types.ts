// import { MouseEvent, Dispatch, SetStateAction } from 'react';
import { MouseEvent, Dispatch, SetStateAction } from 'react';

export type Time = { time: string };

export type Position = { pos: number };

export type TimeArr = Array<string>;

export type TimeLine = Array<Time & Position>;

export type TimelinePointsType = { data: Time & Position };

export type Event = MouseEvent<HTMLDivElement> | globalThis.MouseEvent;

export type StateBoolean = Dispatch<SetStateAction<boolean>>;

export type StateNumber = Dispatch<SetStateAction<number>>;

export type Element = HTMLDivElement | null;

export type TimelineProps = { width: number };

// type MouseMovement = {
//   ev: Event;
//   timetable: Element;
//   main?: Element;
//   startMove?: boolean;
//   setStartMove?: StateBoolean;
//   mouseDownCursorPos: number;
//   setMouseDownCursorPos: StateNumber;
//   currentPositionElement: number;
//   setCurrentPositionElement: StateNumber;
//   maxPositionElement: number;
//   setMaxPositionElement: StateNumber;
// };

// export type Event = {
//   ev: MouseEvent<HTMLDivElement> | globalThis.MouseEvent;
// };

// export type MouseMoveEvents = {
//   child: HTMLDivElement | null;
//   parent?: HTMLDivElement | null;
//   startMove?: boolean;
//   setStartMove?: Dispatch<SetStateAction<boolean>>;
//   maxPositionElement?: number;
//   setMaxPositionElement?: Dispatch<SetStateAction<number>>;
//   currentPositionElement?: number;
//   setCurrentPositionElement?: Dispatch<SetStateAction<number>>;
//   mouseDownCursorPos?: number;
//   setMouseDownCursorPos?: Dispatch<SetStateAction<number>>;
// } & Event;

// export const foo = <T extends MouseMoveEvents>(arg: T) => arg;
