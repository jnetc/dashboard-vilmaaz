import { FC, createContext, useEffect, useState } from 'react';

// Types
import { Schedule, MainStoreProps, LessonsType } from '@types';
import {
  transform,
  staticValues,
  hourPositions,
  dateFormat,
} from '@Utils/helperFunc';
import { hours } from './utils/hours';
import { database } from '@Store/utils/data';

const state: MainStoreProps = {
  autoMovement: true,
  setAutoMovement: el => el,
  dayOfWeek: '',
  setDayOfWeek: day => day,
  activeDays: false,
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

export const MainContext = createContext(state);

//* Length every hour
export const timeStep: number = 340;

const Store: FC = ({ children }) => {
  const [data, setData] = useState<Array<Schedule>>(database);
  const [timeline, setTimeline] = useState(state.timeline);
  const [autoMovement, setAutoMovement] = useState(state.autoMovement);
  const [timelineHours, setTimelineHours] = useState(state.timelineHours);
  const [updateOrders, setUpdateOrders] = useState(state.updateOrders);
  const [dayOfWeek, setDayOfWeek] = useState(state.dayOfWeek);
  // const [activeDays, setActiveDays] = useState(state.activeDays);

  // let day = 'maanantai';
  const day = dayOfWeek;
  const content = transform(data, day, false) as LessonsType[];
  const timepoints = transform(data, day) as string[];
  const isActiveDay = timepoints.length !== 0;
  // console.log(content, timepoints);
  console.log(isActiveDay, data);

  const timetableLenght = timelineHours.length - 1;
  const timetableWidth = timelineHours[timetableLenght]?.position;

  useEffect(() => {
    // If necessary time points for lessons
    // const setHours = new Set([...hours, ...timepoints]);
    // const getHoursPoints = hourPositions([...setHours]);
    // setActiveDays(isActiveDay);
    setData(database);

    const getHoursPoints = timepoints.length !== 0 ? hourPositions(hours) : [];

    setTimelineHours([...getHoursPoints]);
    setTimeline(staticValues(timepoints));

    // const el = document.getElementById('#timeline');
    // if (!el) return;
    // const x = el.getBoundingClientRect().width;
    // setTimelineWidth(
    //   document.getElementById('#timeline')?.offsetWidth as number
    // );
    // console.log(x);
    // setMainWidth(document.getElementById('schedule')?.offsetWidth as number);
    // setTimetableEl(document.getElementById('timetable') as Div);
  }, [dayOfWeek]);

  useEffect(() => {
    const day = dateFormat({ weekday: 'long' });
    setDayOfWeek(day);
  }, []);

  // console.log('MainStore', timelineHours);

  return (
    <MainContext.Provider
      value={{
        autoMovement,
        setAutoMovement,
        dayOfWeek,
        setDayOfWeek,
        activeDays: isActiveDay,
        // timetableEl,
        // setTimetableEl,
        // mainWidth,
        // setTimelineWidth,
        timelineHours,
        // setTimelineHours,
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
