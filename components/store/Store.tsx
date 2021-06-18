import { FC, createContext, useEffect, useState } from 'react';

// Types
import { Schedule, MainStoreProps, LessonsType } from '@types';
import {
  transform,
  staticValues,
  hourPositions,
  hours,
} from '@Utils/helperFunc';
import { database } from '@Store/utils/data';

const state: MainStoreProps = {
  autoMovement: true,
  setAutoMovement: el => el,
  timetableEl: null,
  setTimetableEl: el => el,
  timelineWidth: 0,
  setTimelineWidth: num => num,
  timelineHours: [],
  setTimelineHours: arr => arr,
  timetableWidth: 0,
  divHoursWidth: 90,
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
  const [timelineWidth, setTimelineWidth] = useState(state.timelineWidth);
  const [timeline, setTimeline] = useState(state.timeline);
  const [timetableEl, setTimetableEl] = useState(state.timetableEl);
  const [autoMovement, setAutoMovement] = useState(state.autoMovement);
  const [timelineHours, setTimelineHours] = useState(state.timelineHours);
  const [updateOrders, setUpdateOrders] = useState(state.updateOrders);

  let content = transform(data, false) as LessonsType[];
  let timepoints = transform(data) as string[];

  const timetableLenght = timelineHours.length - 1;
  const timetableWidth = timelineHours[timetableLenght]?.position;

  useEffect(() => {
    const setHours = new Set([...hours, ...timepoints]);
    const getHoursPoints = hourPositions([...setHours]);

    setTimelineHours([...getHoursPoints]);

    setData(database);
    setTimeline(staticValues(timepoints));
    const el = document.querySelector('#timeline');
    if (!el) return;
    const x = el.getBoundingClientRect().width;
    setTimelineWidth(x);
    // console.log(x);
  }, []);

  // console.log('MainStore', timeline, timelineWidth);
  // console.log('MainStore', content);

  return (
    <MainContext.Provider
      value={{
        autoMovement,
        setAutoMovement,
        timetableEl,
        setTimetableEl,
        timelineWidth,
        setTimelineWidth,
        timelineHours,
        setTimelineHours,
        timetableWidth,
        divHoursWidth: state.divHoursWidth,
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
