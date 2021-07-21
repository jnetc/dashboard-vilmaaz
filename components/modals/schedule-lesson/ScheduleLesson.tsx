import { FC } from 'react';
// Style
import { ScheduleLessonStyle } from './ScheduleLesson.style';
import { Lesson } from '@Types';
// Componets
import { InputFeatures } from '@Modals/input-features/InputFeatures';

export const ScheduleLesson: FC<{ data: Lesson }> = ({ data }) => {
  console.log(data);

  return (
    <ScheduleLessonStyle styleErr={false}>
      {/* <span className="error-type">Käytäkää vain numeroita</span> */}
      <input type="text" name="lesson" placeholder="12" />
      <span>:</span>
      <input type="text" name="lesson" placeholder="00" />
      <span> - </span>
      <input type="text" name="lesson" placeholder="12" />
      <span>:</span>
      <input type="text" name="lesson" placeholder="45" />
      <input
        type="text"
        name="lesson"
        placeholder="matematiikka"
        aria-autocomplete="inline"
      />

      <InputFeatures type="alert" />
      <InputFeatures type="copy" />
      <InputFeatures type="delete" />
    </ScheduleLessonStyle>
  );
};
