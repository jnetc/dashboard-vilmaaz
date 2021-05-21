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
};

export type SchoolDay = {
  day: string;
  lessons: Array<Lesson>;
};

export type UserType = {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  avatar: Avatar;
  order: number;
};

export type UserDataType = {
  timetable: Array<Lesson>;
} & UserType;

export type Schedule = {
  timetable: Array<SchoolDay>;
} & UserType;

export type OpenAsideDetailLesson = {
  open: boolean;
  data?: LessonDataProps;
};

export type LessonDataProps = {
  start: number;
  end: number;
} & UserDataType;

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
} & UserDataType;

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

export type ProgressBarType = {
  start: string;
  end: string;
  line: string;
  bar: string;
};

export type ProgressLessonsType = {
  active: string;
  inactive: string;
  start: string;
  end: string;
  lessons: Array<Lesson>;
};
