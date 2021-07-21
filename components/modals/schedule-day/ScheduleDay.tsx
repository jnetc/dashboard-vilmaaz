import { FC, ChangeEvent } from 'react';
// Style
import { ScheduleDayStyle } from './ScheduleDay.style';
import {
  SelectDayInputStyle,
  SelectDayLabelStyle,
} from '@Modals/select-days/SelectDay.style';
// Type
import { Timetable, Input } from '@Types';
// Helper func
import { firstUpperCase } from 'utils/helperFunctions';
// Components
import { LessonBtns } from '@Modals/schedule-buttons/LessonBtns';
import { ScheduleLesson } from '@Modals/schedule-lesson/ScheduleLesson';

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
  let { day, lessons } = data;
  const dayStr = firstUpperCase(day);
  console.log(lessons);

  const lessonsArr = lessons.map(l => {
    return <ScheduleLesson key={l.id} data={l} />;
  });

  return (
    <ScheduleDayStyle>
      <SelectDayInputStyle
        type="checkbox"
        checked={isChecked}
        id={day}
        onChange={onChange}
        tabIndex={0}
      />
      <SelectDayLabelStyle htmlFor={day}>{dayStr}</SelectDayLabelStyle>
      <ul>{lessonsArr}</ul>
      <LessonBtns style="add">Luo uusi tunti</LessonBtns>
      {/* <LessonBtns style="clear">Poista kaikki</LessonBtns> */}
    </ScheduleDayStyle>
  );
};
