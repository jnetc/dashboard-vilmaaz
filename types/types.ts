// SIMPLE TYPES
export type Div = HTMLDivElement;
export type Button = HTMLButtonElement;
export type Input = HTMLInputElement;
export type Form = HTMLFormElement;
export type FieldSet = HTMLFieldSetElement;
export type Element = Div | null;
export type This = globalThis.MouseEvent;

export interface Avatar {
  img: string;
  name: string;
}

export interface LessonsColor {
  accent: string; // акцентирующий цвет
  shade: string; // оттенок цета, акцентный + чёрный
}

export interface User {
  id: string;
  name: string;
  color: string;
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

//!=== STEPS
export interface Timetable {
  day: string;
  lessons: Array<Lesson>;
}
export interface ProfileTimetable {
  timetable: Array<Timetable>;
}
export interface ProfileStore extends User {
  timetable: Array<ProfileTimetable>;
}
//!===

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
  color: string;
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
export interface StoreCtxProps extends DaysType {
  dayOfWeek: string;
  setDayOfWeek: (day: string) => void;
  timelineHours: Array<TimePosition>;
  timelineWidth: number;
  content: Array<LessonsType>;
  timepoints: Array<string>;
  timeline: StaticValues;
}

export interface MainCtxProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  autoMovement: boolean;
  setAutoMovement: (el: boolean) => void;
  profileLine: { id: string; color: string };
  setProfileLine: (obj: { id: string; color: string }) => void;
}

export interface TimelineStoreProps {
  mainWidth: number;
  timetableEl: Element;
}

export interface CreateProfileStoreProps extends User {
  setUsername: (str: string) => void;
  setColor: (str: string) => void;
  setAvatar: (str: string | undefined) => void;
  reset: boolean;
}

// BUTTONS
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
