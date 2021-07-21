import { FC, createContext, useEffect, useState } from 'react';

// Types
import { Schedule, StoreCtxProps, LessonsType } from '@Types';
import {
  transform,
  staticValues,
  hourPositions,
  dateFormat,
} from 'utils/helperFunctions';

import { hours } from '@Constants';
import { database } from './data';

const state: StoreCtxProps = {
  dayOfWeek: '',
  setDayOfWeek: day => day,
  today: true,
  activeDay: false,
  timelineHours: [],
  timelineWidth: 0,
  content: [],
  timepoints: [],
  timeline: {
    startLessons: 0,
    endLessons: 0,
    totalTime: 0,
  },
};
// Global context
export const StoreContext = createContext(state);

// Global constants
export const minutesInHour: number = 60;
export const step: number = 340; // Length every hour
export const hourDistance = step + minutesInHour; // The distance between the every hour
export const minuteDistance = hourDistance / minutesInHour; // The distance between the every minute
export const hourDivWidth: number = 90;
export const rightPanelWidth = 300;

const Store: FC = ({ children }) => {
  const [data, setData] = useState<Array<Schedule>>(database);
  const [timelineHours, setTimelineHours] = useState(state.timelineHours);
  const [dayOfWeek, setDayOfWeek] = useState(state.dayOfWeek);

  const today = dateFormat({ weekday: 'long' });
  // Manual check day
  // let day = 'perjantai';
  const day = dayOfWeek;

  const content = transform(data, day, false) as LessonsType[];
  const timepoints = transform(data, day) as string[];
  const timeline = staticValues(timepoints);
  const isActiveDay = timepoints.length !== 0;
  const isToday = today === dayOfWeek;

  // console.log(isActiveDay, dayOfWeek, isToday);

  const timelineLenght = timelineHours.length - 1;
  const timelineWidth = timelineHours[timelineLenght]?.position;

  useEffect(() => {
    // If necessary time points for lessons
    // const setHours = new Set([...hours, ...timepoints]);
    // const getHoursPoints = hourPositions([...setHours]);

    setData(database);

    const getHoursPoints = timepoints.length !== 0 ? hourPositions(hours) : [];

    setTimelineHours([...getHoursPoints]);
    // setTimeline(staticValues(timepoints));
  }, [dayOfWeek]);

  useEffect(() => {
    setDayOfWeek(today);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        dayOfWeek,
        setDayOfWeek,
        today: isToday,
        activeDay: isActiveDay,
        timelineHours,
        timelineWidth,
        content,
        timepoints,
        timeline,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
