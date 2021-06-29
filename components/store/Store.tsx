import { FC, createContext, useEffect, useState } from 'react';

// Types
import { Schedule, MainStoreProps, LessonsType } from '@types';
import {
  transform,
  staticValues,
  hourPositions,
  dateFormat,
} from '@Utils/helperFunc';

import { hours } from './hours';
import { database } from './data';

const state: MainStoreProps = {
  autoMovement: true,
  setAutoMovement: el => el,
  dayOfWeek: '',
  setDayOfWeek: day => day,
  today: true,
  activeDay: false,
  timelineHours: [],
  timetableWidth: 0,
  updateOrders: true,
  setUpdateOrders: b => b,
  content: [],
  timepoints: [],
  timeline: {
    startLessons: 0,
    endLessons: 0,
    totalTime: 0,
  },
};
// Global context
export const MainContext = createContext(state);

// Global constants
export const minutesInHour: number = 60;
export const step: number = 340; // Length every hour
export const hourDistance = step + minutesInHour; // The distance between the every hour
export const minuteDistance = hourDistance / minutesInHour; // The distance between the every minute
export const hourDivWidth: number = 90;

const Store: FC = ({ children }) => {
  const [data, setData] = useState<Array<Schedule>>(database);
  const [timeline, setTimeline] = useState(state.timeline);
  const [autoMovement, setAutoMovement] = useState(state.autoMovement);
  const [timelineHours, setTimelineHours] = useState(state.timelineHours);
  const [updateOrders, setUpdateOrders] = useState(state.updateOrders);
  const [dayOfWeek, setDayOfWeek] = useState(state.dayOfWeek);

  const today = dateFormat({ weekday: 'long' });
  // Manual check day
  // let day = 'maanantai';
  const day = dayOfWeek;

  const content = transform(data, day, false) as LessonsType[];
  const timepoints = transform(data, day) as string[];
  const isActiveDay = timepoints.length !== 0;
  const isToday = today === dayOfWeek;

  // console.log(isActiveDay, dayOfWeek, isToday);

  const timetableLenght = timelineHours.length - 1;
  const timetableWidth = timelineHours[timetableLenght]?.position;

  useEffect(() => {
    // If necessary time points for lessons
    // const setHours = new Set([...hours, ...timepoints]);
    // const getHoursPoints = hourPositions([...setHours]);

    setData(database);

    const getHoursPoints = timepoints.length !== 0 ? hourPositions(hours) : [];

    setTimelineHours([...getHoursPoints]);
    setTimeline(staticValues(timepoints));
  }, [dayOfWeek]);

  useEffect(() => {
    setDayOfWeek(today);
  }, []);

  return (
    <MainContext.Provider
      value={{
        autoMovement,
        setAutoMovement,
        dayOfWeek,
        setDayOfWeek,
        today: isToday,
        activeDay: isActiveDay,
        timelineHours,
        timetableWidth,
        updateOrders,
        setUpdateOrders,
        content,
        timepoints,
        timeline,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export default Store;
