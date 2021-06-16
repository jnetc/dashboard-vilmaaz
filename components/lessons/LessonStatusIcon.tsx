import { FC } from 'react';
import { Done, Wait } from '@Icons/Lesson';
// Styles
import { LessonStatusIconStyle } from '@styles/lessons';

export const LessonStatusIcon: FC<{
  status: string;
  timer: number | undefined;
}> = ({ status, timer }) => {
  switch (status) {
    case 'done':
      return (
        <LessonStatusIconStyle>
          <Done />
        </LessonStatusIconStyle>
      );
    case 'time':
      return timer ? (
        <LessonStatusIconStyle>{timer}m</LessonStatusIconStyle>
      ) : (
        <></>
      );
    case 'wait':
      return (
        <LessonStatusIconStyle>
          <Wait />
        </LessonStatusIconStyle>
      );
    default:
      return <LessonStatusIconStyle>!</LessonStatusIconStyle>;
  }
};
