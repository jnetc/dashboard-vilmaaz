import { MouseEvent, Dispatch, SetStateAction } from 'react';

export type Time = { time: string };

export type Status = { status: string };

export type Position = { pos: number };

export type Distance = { distance: number };

export type ArrayString = Array<string>;

export type TimelineWidth = { width: number };

export type TimelinePointsHeight = { lines: number };

export type TimeLine = Array<Time & Position>;

export type TimelinePointsType = { data: Time & Position };

export type StateBoolean = Dispatch<SetStateAction<boolean>>;

export type StateNumber = Dispatch<SetStateAction<number>>;

export type DispatchTime = Dispatch<SetStateAction<number | null>>;

export type Div = HTMLDivElement;

export type Element = Div | null;

export type Event = MouseEvent<Div>;

export type StartEndStr = { start: string; end: string };

export type StartEndNum = { start: number; end: number };

export type LessonColors = { primaryColor: string; secondaryColor: string };

export type NameAndId = { id: string; name: string };

export type LessonsPosProps = { data: StartEndNum & LessonColors & NameAndId };

export type LessonsType = NameAndId & StartEndStr & LessonColors;

export type LessonsArray = Array<LessonsType>;

export type LessonStyleType = Position & Distance & LessonColors;
