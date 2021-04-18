export type Time = {
  start: string;
  end: string;
};

export type Timetable = {
  id: string;
  lesson: string;
  time: Time;
  duration: number;
};

export type Schedule = {
  id: string;
  name: string;
  timetable: Array<Timetable>;
};

export type ContextProps = {
  menu: boolean;
  data: Array<Schedule>;
};
