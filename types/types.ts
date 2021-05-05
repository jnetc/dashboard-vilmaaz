import { MouseEvent, Dispatch, SetStateAction } from 'react';

// SIMPLE TYPES
export type Div = HTMLDivElement;
export type Element = Div | null;
export type Event = MouseEvent<Div>;
export type StateBoolean = Dispatch<SetStateAction<boolean>>;
export type StateNumber = Dispatch<SetStateAction<number>>;
export type DispatchTime = Dispatch<SetStateAction<number | null>>;

// STORE / CONTEXT
export type StartEnd = {
  start: string;
  end: string;
};

export type Avatar = {
  img: string;
  name: string;
};

export type Lesson = {
  id: string;
  lesson: string;
  time: StartEnd;
  duration: number;
};

export type UserType = {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  avatar: Avatar;
  order: number;
};
export type Schedule = {
  timetable: Array<Lesson>;
} & UserType;

export type UseContextProps = {
  menu: boolean;
  autoMovement: boolean;
  setAutoMovement: (el: boolean) => void;
  timetableEl: HTMLDivElement | null;
  setTimetableEl: (el: HTMLDivElement | null) => void;
  trackWidth: number;
  setTrackWidth: (el: number) => void;
  content: Array<LessonsType>;
  timepoints: Array<string>;
  timeline: StaticValues;
};

export type StaticValues = {
  startLessons: number;
  endLessons: number;
  totalTime: number;
};

export type LessonsType = {
  start: string;
  end: string;
} & UserType;

// NAVIGATION
export type NavLink = {
  href: string;
  path: string;
  active: boolean;
  counter: boolean;
};

export type NavigationProps = {
  icon: JSX.Element;
  url: NavLink;
  index: number;
};

// BOTTUNS
export type ButtonStyleType = {
  isFill?: boolean;
  colorTheme: string;
};

type Styled = ({ isFill?: true } | { isFill: never }) &
  (
    | { colorTheme: 'primary' }
    | { colorTheme: 'default' }
    | { colorTheme: 'danger' }
  );

export type ButtonProps = { children: React.ReactChild } & Styled;

// TIMELINE

export type Position = { position: number };

export type Time = { time: string };

export type Distance = { distance: number };

export type Color = { primary: string; secondary: string };

export type Lines = { lines: number };

export type Order = { order: number };

export type Width = { width: number };

export type TimeLine = Array<Time & Position>;

export type TimelinePointsType = { data: Time & Position };

export type LessonDataProps = {
  start: number;
  end: number;
} & UserType;
