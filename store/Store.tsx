import { FC, createContext, useEffect, useState } from 'react';

// Types
import { Schedule, MainStoreProps, LessonsType } from '@Types';
import { transform, staticValues, hourPositions, dateFormat } from '@Helpers';

import { hours } from '@Const/hours';
import { database } from './data';

const state: MainStoreProps = {
  openModal: false,
  setOpenModal: open => open,
  autoMovement: true,
  setAutoMovement: el => el,
  dayOfWeek: '',
  setDayOfWeek: day => day,
  today: true,
  activeDay: false,
  timelineHours: [],
  timelineWidth: 0,
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
export const rightPanelWidth = 300;

const Store: FC = ({ children }) => {
  const [data, setData] = useState<Array<Schedule>>(database);
  const [openModal, setOpenModal] = useState(state.openModal);
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
    <MainContext.Provider
      value={{
        openModal,
        setOpenModal,
        autoMovement,
        setAutoMovement,
        dayOfWeek,
        setDayOfWeek,
        today: isToday,
        activeDay: isActiveDay,
        timelineHours,
        timelineWidth,
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
