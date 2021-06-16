import { MouseEvent, Dispatch, SetStateAction, TouchEventHandler } from 'react';

// SIMPLE TYPES
export type Div = HTMLDivElement;
export type Element = Div | null;
export type Event = MouseEvent<Div>;
export type Touch = TouchEventHandler<Div>;
export type StateBoolean = Dispatch<SetStateAction<boolean>>;
export type StateNumber = Dispatch<SetStateAction<number>>;
export type DispatchTime = Dispatch<SetStateAction<number | null>>;

// STORE / CONTEXT
export interface LessonTime {
  time: string;
  position?: number;
}
export interface LessonTimePosition {
  position: number;
}

export interface Avatar {
  img: string;
  name: string;
}

export interface LessonData {
  id: string;
  lesson: string;
  start: LessonTime;
  end: LessonTime;
}

export interface LessonsColor {
  accent: string; // акцентирующий цвет
  shade: string; // оттенок цета, акцентный + чёрный
}

export interface SchoolDay {
  day: string;
  lessons: Array<LessonData>;
}

export interface UserType {
  id: string;
  name: string;
  colors: LessonsColor;
  avatar: Avatar;
}

export interface UserDataType extends UserType {
  timetable: Array<LessonData>;
}

export interface Schedule extends UserType {
  timetable: Array<SchoolDay>;
}

export interface OpenAsideDetailLesson {
  open: boolean;
  data?: LessonsType;
}

// export type LessonDataProps = {
//   start: number;
//   end: number;
// } & UserDataType;

export type GlobalStoreProps = {
  openMenu: boolean;
  setOpenMenu: (el: boolean) => void;
  mainPaddingLeft: number;
  setMainPaddingLeft: (num: number) => void;
};

export type MainStoreProps = {
  autoMovement: boolean;
  setAutoMovement: (el: boolean) => void;
  detailLesson: OpenAsideDetailLesson;
  setDetailLesson: (data: OpenAsideDetailLesson) => void;
  timetableEl: Element;
  setTimetableEl: (el: Element) => void;
  timelineWidth: number;
  setTimelineWidth: (el: number) => void;
  timelineHours: Array<TimelineHours>;
  setTimelineHours: (arr: Array<TimelineHours>) => void;
  timetableWidth: number;
  divHoursWidth: number;
  updateOrders: boolean;
  setUpdateOrders: (order: boolean) => void;
  content: Array<LessonsType>;
  timepoints: Array<string>;
  timeline: StaticValues;
};

export interface TimelineHours {
  time: string;
  position: number;
}

export interface StaticValues {
  startLessons: number;
  endLessons: number;
  totalTime: number;
}

export interface InitPosition {
  time: string;
  position: number;
}

export interface LessonsType extends UserDataType {
  start: InitPosition;
  end: InitPosition;
}

// NAVIGATION
export interface NavLink {
  href: string;
  path: string;
  active: boolean;
  counter: boolean;
}

export interface NavigationProps {
  icon: JSX.Element;
  url: NavLink;
  index: number;
}

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

// TIMELINE

export type Position = { position: number };

export type Time = { time: string };

export type Distance = { distance: number };

export type Color = { primary: string; secondary: string };

// export type Lines = { lines: number };

// export type Order = { order: number };

export type Width = { width: number };

export type TimeLine = Array<Time & Position>;

export type TimelinePointsType = { data: Time & Position };

export type ProgressBarType = {
  start: string;
  end: string;
  line: string;
  bar: string;
};

export type ProgressLessonsData = {
  lessons: Array<LessonData>;
} & LessonsColor;

export type ProgressLessonsDataStyle = {
  colors: LessonsColor;
  flow: {
    process: string;
  };
};

export type Order = {
  id: string;
  name: string;
  order: number;
};
