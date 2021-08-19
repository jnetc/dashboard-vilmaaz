import { FC, ChangeEvent, useState } from 'react';
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
import { useCommonUsersStore } from '@Hooks/useStores';

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
  const { dispatch, setNewUser } = useCommonUsersStore();
  const [rows, setRows] = useState(lessons);

  const isEmptyRows = rows.length <= 0;
  const dayStr = firstUpperCase(day);

  const getRows = (data: Lesson) => {
    const typingCheck =
      data.lesson.match(RegExp(/[\sa-яA-Я0-9]/gmu))?.join('') || '';

    if (typingCheck !== data.lesson) {
      dispatch({
        type: 'numbers-and-letters',
        payload: {
          isError: true,
          id: data.id,
          message: 'Käytä vain numeroita tai kirjaimia',
        },
      });
    }

    if (typingCheck === data.lesson) {
      dispatch({ type: 'no-errors', payload: { isError: false } });
    }

    const idx = rows.findIndex(idx => idx.id === data.id);
    rows[idx] = data;
    setRows(rows);

    // Update state
    setNewUser(prevState => {
      if (!prevState) return null;

      prevState.timetable.map(tb => {
        if (tb.day === day) {
          return (tb.lessons = rows);
        }
        return tb;
      });

      return { ...prevState };
    });
  };

  const removeRow = (id: string) => {
    const filtered = rows.filter(r => r.id !== id);
    setRows(filtered);

    setNewUser(prevState => {
      if (!prevState) return null;

      prevState.timetable.map(tb => {
        if (tb.day === day) {
          return (tb.lessons = filtered);
        }
        return tb;
      });

      return { ...prevState };
    });
  };

  const addNewRow = () => {
    const newRow = {
      id: `${Math.random()}`,
      lesson: '',
      start: { time: '', position: 0 },
      end: { time: '', position: 0 },
    };

    setRows([...rows, newRow]);
  };

  const lessonsRows = rows.map(l => {
    return (
      <ScheduleLesson
        key={l.id}
        data={l}
        getRows={getRows}
        removeRow={removeRow}
      />
    );
  });

  return (
    <ScheduleDayStyle isEmptyRows={isEmptyRows}>
      <SelectDayInputStyle
        type="checkbox"
        checked={isChecked}
        id={day}
        onChange={onChange}
        tabIndex={0}
      />
      <SelectDayLabelStyle htmlFor={day}>
        {dayStr}
        <span className="day-label-info">
          Klikkaa jos haluat poistaa tätä päivää
        </span>
      </SelectDayLabelStyle>
      {!isEmptyRows && <ul>{lessonsRows}</ul>}
      <LessonBtns style="add" onClick={addNewRow}>
        Luo uusi tunti
      </LessonBtns>
    </ScheduleDayStyle>
  );
};
