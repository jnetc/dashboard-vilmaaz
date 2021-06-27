// import { MouseEvent, MouseEventHandler } from 'react';

// SIMPLE TYPES
export type Div = HTMLDivElement;
export type Button = HTMLButtonElement;
export type Element = Div | null;
export type This = globalThis.MouseEvent;
// export interface Event <T extends MouseEventHandler<T>> {
//   readonly target: T;
// }

// export type Events<T, E> = (event: {target: <E>}) => void
// export type EvDiv = MouseEvent<Div, This>;
// export type EvButton = MouseEvent<Button>;
// export type Touch = TouchEventHandler<Div>;

export interface Avatar {
  img?: string;
  name: string;
}

export interface LessonsColor {
  accent: string; // акцентирующий цвет
  shade: string; // оттенок цета, акцентный + чёрный
}

export interface User {
  id: string;
  name: string;
  colors: LessonsColor;
  avatar: Avatar;
}

export interface Time {
  time: string;
}

export interface TimePosition {
  time: string;
  position: number;
}

export interface InitLesson {
  id: string;
  lesson: string;
  start: Time;
  end: Time;
}

export interface Lesson {
  id: string;
  lesson: string;
  start: TimePosition;
  end: TimePosition;
}

export interface SchoolDay {
  day: string;
  lessons: Array<InitLesson>;
}

export interface UserDataType extends User {
  timetable: Array<Lesson>;
}

export interface Schedule extends User {
  timetable: Array<SchoolDay>;
}

export interface LessonsType extends UserDataType {
  start: TimePosition;
  end: TimePosition;
}

export interface LessonComponent {
  width: number;
  colors: string;
  lesson: string;
  start: TimePosition;
  end: TimePosition;
}

export type Order = {
  id: string;
  name: string;
  order: number;
};

export interface StaticValues {
  startLessons: number;
  endLessons: number;
  totalTime: number;
}

export interface PanelProfileType extends User {
  start: TimePosition;
  end: TimePosition;
  lessons: number;
}

export type GlobalStoreProps = {
  openMenu: boolean;
  setOpenMenu: (el: boolean) => void;
  mainPaddingLeft: number;
  setMainPaddingLeft: (num: number) => void;
};

// STORE / CONTEXT
export type MainStoreProps = {
  autoMovement: boolean;
  setAutoMovement: (el: boolean) => void;
  dayOfWeek: string;
  setDayOfWeek: (day: string) => void;
  timetableEl: Element;
  setTimetableEl: (el: Element) => void;
  timelineWidth: number;
  setTimelineWidth: (el: number) => void;
  timelineHours: Array<TimePosition>;
  setTimelineHours: (arr: Array<TimePosition>) => void;
  timetableWidth: number;
  divHoursWidth: number;
  updateOrders: boolean;
  setUpdateOrders: (order: boolean) => void;
  content: Array<LessonsType>;
  timepoints: Array<string>;
  timeline: StaticValues;
};

// BOTTUNS
export interface ButtonStyleType {
  isFill?: boolean;
  colorTheme: string;
}

type Styled = ({ isFill?: true } | { isFill: never }) &
  (
    | { colorTheme: 'primary' }
    | { colorTheme: 'default' }
    | { colorTheme: 'danger' }
  );

export type ButtonProps = {
  children: React.ReactChild;
  onClick: () => void;
} & Styled;
