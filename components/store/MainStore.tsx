import { FC, createContext, useContext, useEffect, useState } from 'react';

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
  // detailLesson: { open: false, data: undefined },
  // setDetailLesson: obj => obj,
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

// //* Hook
export const useMainStore = () => {
  return useContext(MainContext);
};

//* Length every hour
export const timeStep: number = 340;

const MainStore: FC = ({ children }) => {
  const [data, setData] = useState<Array<Schedule>>(database);
  // const [detailLesson, setDetailLesson] = useState(state.detailLesson);
  const [timelineWidth, setTimelineWidth] = useState(state.timelineWidth);
  const [timeline, setTimeline] = useState(state.timeline);
  const [timetableEl, setTimetableEl] = useState(state.timetableEl);
  const [autoMovement, setAutoMovement] = useState(state.autoMovement);
  const [timelineHours, setTimelineHours] = useState(state.timelineHours);
  const [updateOrders, setUpdateOrders] = useState(state.updateOrders);

  let content = transform(data, false) as LessonsType[];
  let timepoints = transform(data) as string[];

  console.log(content);

  const timetableLenght = timelineHours.length - 1;
  const timetableWidth = timelineHours[timetableLenght]?.position;

  useEffect(() => {
    const setHours = new Set([...hours, ...timepoints]);
    const getHoursPoints = hourPositions([...setHours]);
    // const getlessonsPoints = hourPositions(timepoints);

    // console.log('MainStore', autoMovement);

    setTimelineHours([...getHoursPoints]);

    setData(database);
    setTimeline(staticValues(timepoints));
    const el = document.querySelector('#timeline');
    if (!el) return;
    const x = el.getBoundingClientRect().width;
    setTimelineWidth(x);
    // console.log(x);
  }, []);

  // const timePointPositions = timepoints.map(t => {
  //   const position = transformTimeToNum2(t);
  //   return { time: t, position };
  // });

  // console.log('MainStore', timeline, timelineWidth);
  // console.log('MainStore', content);

  return (
    <MainContext.Provider
      value={{
        autoMovement,
        setAutoMovement,
        timetableEl,
        setTimetableEl,
        // detailLesson,
        // setDetailLesson,
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

export default MainStore;
