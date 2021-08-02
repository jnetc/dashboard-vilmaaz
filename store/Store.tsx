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
  indexDB: null,
  setIndexDB: data => data,
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
  let [indexDB, setIndexDB] = useState<IDBDatabase | null>(state.indexDB);

  const today = dateFormat({ weekday: 'long' });
  // Manual check day
  // let day = 'perjantai';
  const day = dayOfWeek;

  const content = transform(data, day, false) as LessonsType[];
  const timepoints = transform(data, day) as string[];
  const timeline = staticValues(timepoints);
  const isActiveDay = timepoints.length !== 0;
  const isToday = today === dayOfWeek;

  //
  //
  //
  //
  //
  //
  //
  // let connectedDB: IDBDatabase;
  useEffect(() => {
    // let database = indexedDB.open('data', 1);
    // database.addEventListener(
    //   'error',
    //   (err: IDBOpenDBRequestEventMap['error']) => {
    //     console.warn('error', err);
    //   }
    // );
    // database.addEventListener(
    //   'success',
    //   (ev: IDBOpenDBRequestEventMap['success']) => {
    //     const db = ev.target as IDBRequest<IDBDatabase>;
    //     indexDB = db.result;
    //     console.info('success', db.result);
    //   }
    // );
    // database.addEventListener(
    //   'upgradeneeded',
    //   (ev: IDBOpenDBRequestEventMap['upgradeneeded']) => {
    //     const db = ev.target as IDBRequest<IDBDatabase>;
    //     indexDB = db.result;
    //     const oldVersion = ev.oldVersion;
    //     const newVersion = ev.newVersion || db.result.version;
    //     console.log(`DB upgraded form v.${oldVersion} to v.${newVersion}`);
    //     if (!indexDB.objectStoreNames.contains('data')) {
    //       console.log('database created!!!');
    //       indexDB.createObjectStore('data', {
    //         keyPath: 'id',
    //         autoIncrement: true,
    //       });
    //     }
    // const transition = connectedDB.transaction('data', 'readwrite');
    // const schedule = transition.objectStore('data');
    // const newData = data;
    // const request = schedule.add(JSON.stringify(newData));
    // request.addEventListener('success', () => {
    //   console.log(`added to the store: ${request.result}`);
    // });
    // request.addEventListener('error', () => {
    //   console.log(`error: ${request.error}`);
    // });
    //     console.info('upgradeneeded', db.result);
    //   }
    // );
    // console.log('index useState', indexDB);
  }, []);
  //
  //
  //
  //
  //
  //
  //

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
        indexDB,
        setIndexDB,
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
