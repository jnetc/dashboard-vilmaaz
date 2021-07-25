import { FC, ChangeEvent, useState, useEffect } from 'react';
// Style
import { ScheduleDayStyle } from './ScheduleDay.style';
import {
  SelectDayInputStyle,
  SelectDayLabelStyle,
} from '@Modals/select-days/SelectDay.style';
// Type
import { Timetable, Lesson, Input } from '@Types';
// Helper func
import { firstUpperCase } from 'utils/helperFunctions';
// Components
import { LessonBtns } from '@Modals/schedule-buttons/LessonBtns';
import { ScheduleLesson } from '@Modals/schedule-lesson/ScheduleLesson';
// Hook
import { useStepsStore } from '@Hooks/useStores';

export interface SelectDayType {
  data: Timetable;
  isChecked: boolean;
  onChange: (ev: ChangeEvent<Input>) => void;
}

export const ScheduleDay: FC<SelectDayType> = ({
  data,
  isChecked,
  onChange,
}) => {
  const { day, lessons } = data;
  const { timetable, setTimetable, dispatch, error } = useStepsStore();
  const [rows, setRows] = useState(lessons);

  const isEmptyRows = rows.length <= 0;
  const dayStr = firstUpperCase(day);

  const getRows = (data: Lesson) => {
    const idx = rows.findIndex(idx => idx.id === data.id);
    rows[idx] = data;
    setRows(rows);
  };

  const copyRow = (data: Lesson) => {
    console.log(data);
  };

  const removeRow = (id: string) => {
    const filtered = rows.filter(r => r.id !== id);
    setRows(filtered);
  };

  const lessonsRows = rows.map(l => {
    return (
      <ScheduleLesson
        key={l.id}
        data={l}
        getRows={getRows}
        copyRow={copyRow}
        removeRow={removeRow}
        hasError={l.id === error.id ? error : { isError: false }}
      />
    );
  });

  const addNewRow = () => {
    const newRow = {
      id: `${Math.random()}`,
      lesson: '',
      start: { time: '', position: 0 },
      end: { time: '', position: 0 },
    };
    setRows([...rows, newRow]);
  };

  useEffect(() => {
    const idx = timetable.findIndex(idx => idx.day === day);
    timetable[idx].lessons = rows;
    setTimetable(timetable);

    const hasLessons = timetable.find(t => t.lessons.length !== 0 && t);
    if (!hasLessons) {
      dispatch({
        type: 'empty-days',
        payload: { isError: true, message: 'täytä ainakin yksi rivi ' },
      });
    }
  }, [rows]);

  return (
    <ScheduleDayStyle isEmptyRows={isEmptyRows}>
      <SelectDayInputStyle
        type="checkbox"
        checked={isChecked}
        id={day}
        onChange={onChange}
        tabIndex={0}
      />
      <SelectDayLabelStyle htmlFor={day}>{dayStr}</SelectDayLabelStyle>
      {!isEmptyRows && <ul>{lessonsRows}</ul>}
      <LessonBtns style="add" onClick={addNewRow}>
        Luo uusi tunti
      </LessonBtns>
      {/* <LessonBtns style="clear">Poista kaikki</LessonBtns> */}
    </ScheduleDayStyle>
  );
};
