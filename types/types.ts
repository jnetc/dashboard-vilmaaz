// SIMPLE TYPES
export type Div = HTMLDivElement;
export type Button = HTMLButtonElement;
export type Element = Div | null;
export type This = globalThis.MouseEvent;

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
  timetable?: Array<Lesson>;
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

export interface DaysType {
  today: boolean;
  activeDay: boolean;
}

export interface ProfilesType extends User, DaysType {
  start: TimePosition;
  end: TimePosition;
  lessons?: number;
}
export interface ProfilesTimeType extends DaysType {
  starttime: number;
  endtime: number;
}

// STORES / CONTEXTS
export interface MainStoreProps extends DaysType {
  autoMovement: boolean;
  setAutoMovement: (el: boolean) => void;
  dayOfWeek: string;
  setDayOfWeek: (day: string) => void;
  timelineHours: Array<TimePosition>;
  timelineWidth: number;
  updateOrders: boolean;
  setUpdateOrders: (order: boolean) => void;
  content: Array<LessonsType>;
  timepoints: Array<string>;
  timeline: StaticValues;
}

export interface TimelineStore {
  mainWidth: number;
  timetableEl: Element;
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
