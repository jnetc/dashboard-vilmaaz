import { Dispatch, SetStateAction } from 'react';
// SIMPLE TYPES
export type Div = HTMLDivElement;
export type Button = HTMLButtonElement;
export type Input = HTMLInputElement;
export type Form = HTMLFormElement;
export type FieldSet = HTMLFieldSetElement;
export type Element = Div | null;

export interface Avatar {
  img: string;
  name: string;
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

export interface Lesson {
  id: string;
  lesson: string;
  start: TimePosition;
  end: TimePosition;
}

export interface Timetable {
  day: string;
  lessons: Array<Lesson>;
}

export interface UserDataType extends User {
  timetable?: Array<Lesson>;
}

export interface Schedule extends User {
  timetable: Array<Timetable>;
}

export interface LessonsType extends Schedule {
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

export interface StaticValues {
  startLessons: number;
  endLessons: number;
  totalTime: number;
  timelineWidth: number;
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
export interface UpdateStore {
  status: 'default' | 'success' | 'error';
  message?: string;
}

export type Steps = 'profile' | 'days' | 'schedule';

export interface StoreCtxProps extends DaysType {
  profile: User | null;
  setProfile: (obj: User | null) => void;
  timetable: Array<Timetable>;
  setTimetable: (arr: Array<Timetable>) => void;
  updateStore: UpdateStore;
  setUpdateStore: Dispatch<SetStateAction<UpdateStore>>; // for prevState!!!
  dayOfWeek: string;
  setDayOfWeek: (day: string) => void;
  content: Array<LessonsType>;
  timepoints: Array<{ time: string; position: number }>;
  timeline: StaticValues;
}

export interface MainCtxProps {
  autoMovement: boolean;
  setAutoMovement: (el: boolean) => void;
  profileLine: { id: string; color: string };
  setProfileLine: (obj: { id: string; color: string }) => void;
}

export interface CommonUsersCtxProps {
  error: Error;
  dispatch: Dispatch<Action>;
  openModal: { isOpen: boolean; action: boolean };
  setOpenModal: (open: { isOpen: boolean; action: boolean }) => void;
  step: { value: Steps; id?: string };
  setStep: (data: { value: Steps; id?: string }) => void;
  newUser: Schedule | null;
  setNewUser: Dispatch<SetStateAction<Schedule | null>>; // for prevState!!!
}

export interface TimelineCtxProps {
  mainWidth: number;
  timetableEl: Element;
}

// STEPS
export type Error = {
  isError?: boolean;
  isActive?: boolean;
  isMaxSize?: boolean;
  message?: string;
  id?: string;
};

export interface Action {
  type?:
    | 'numbers-and-letters'
    | 'two-letter-or-more'
    | 'file-size-limit'
    | 'empty-days'
    | 'no-errors';
  payload: Error;
}
