import { FC, createContext, useContext, useEffect, useState } from 'react';

// Types
import { Schedule, MainStoreProps } from '@types';
import { transform, staticValues } from '@Store/utils/helperFunc';
import { database } from '@Store/utils/data';

const state: MainStoreProps = {
  autoMovement: true,
  setAutoMovement: el => el,
  detailLesson: { open: false, data: undefined },
  setDetailLesson: obj => obj,
  timetableEl: null,
  setTimetableEl: el => el,
  timelineWidth: 0,
  setTimelineWidth: num => num,
  content: [],
  timepoints: [],
  timeline: {
    startLessons: 0,
    endLessons: 0,
    totalTime: 0,
  },
};
const MainContext = createContext(state);

export const useMainStore = () => {
  return useContext(MainContext);
};

const MainStore: FC = ({ children }) => {
  const [data, setData] = useState<Array<Schedule>>(database);
  const [detailLesson, setDetailLesson] = useState(state.detailLesson);
  const [timelineWidth, setTimelineWidth] = useState(state.timelineWidth);
  const [timeline, setTimeline] = useState(state.timeline);
  const [timetableEl, setTimetableEl] = useState(state.timetableEl);
  const [autoMovement, setAutoMovement] = useState(state.autoMovement);

  let content = transform(data, false);
  let timepoints = transform(data);

  useEffect(() => {
    setData(database);

    setTimeline(staticValues(timepoints));
  }, []);

  return (
    <MainContext.Provider
      value={{
        autoMovement,
        setAutoMovement,
        timetableEl,
        setTimetableEl,
        detailLesson,
        setDetailLesson,
        timelineWidth,
        setTimelineWidth,
        content,
        timepoints,
        timeline,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainStore;
