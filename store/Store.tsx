import { FC, createContext, useEffect, useState } from 'react';

// Types
import { Schedule, StoreCtxProps, LessonsType, TimePosition } from '@Types';
import { transform, staticValues, dateFormat } from 'utils/helperFunctions';

// import { database } from './data';
import { getAllFromIndexedDB } from '@IndexedDB';

const state: StoreCtxProps = {
  profile: null,
  setProfile: obj => obj,
  timetable: [],
  setTimetable: arr => arr,
  updateStore: { status: 'default' },
  setUpdateStore: update => update,
  dayOfWeek: '',
  setDayOfWeek: day => day,
  today: true,
  activeDay: false,
  content: [],
  timepoints: [],
  timeline: {
    startLessons: 0,
    endLessons: 0,
    totalTime: 0,
    timelineWidth: 0,
  },
};
// Global context
export const StoreContext = createContext(state);

const Store: FC = ({ children }) => {
  const [updateStore, setUpdateStore] = useState(state.updateStore);
  const [data, setData] = useState<Array<Schedule>>([]);
  const [dayOfWeek, setDayOfWeek] = useState(state.dayOfWeek);
  const [profile, setProfile] = useState(state.profile);
  const [timetable, setTimetable] = useState(state.timetable);

  useEffect(() => {
    (async () => {
      const data = await getAllFromIndexedDB('schedule');
      setData(data);
    })();
  }, [dayOfWeek, updateStore]);

  const today = dateFormat({ weekday: 'long' });
  // Manual check day
  // let day = 'perjantai';
  const day = dayOfWeek;
  const content = transform(data, day, false) as LessonsType[];
  const timepoints = transform(data, day) as Array<TimePosition>;
  const timeline = staticValues(timepoints);
  const isActiveDay = timepoints.length !== 0;
  const isToday = today === dayOfWeek;

  // console.log(updateStore);

  useEffect(() => {
    setDayOfWeek(today);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        profile,
        setProfile,
        timetable,
        setTimetable,
        updateStore,
        setUpdateStore,
        dayOfWeek,
        setDayOfWeek,
        today: isToday,
        activeDay: isActiveDay,
        content,
        timepoints,
        timeline,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
