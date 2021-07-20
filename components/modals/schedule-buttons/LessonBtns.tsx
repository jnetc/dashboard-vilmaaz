import { FC } from 'react';
import {
  LessonBtnsStyle,
  ClearAllLessons,
  LessonAdd,
} from './LessonBtns.style';

type ButtonStyleType = 'add' | 'clear';
interface LessonButtonType {
  style?: ButtonStyleType;
}

export const LessonBtns: FC<LessonButtonType> = ({ style, children }) => {
  switch (style) {
    case 'add':
      return (
        <LessonAdd role="button" tabIndex={0}>
          {children}
        </LessonAdd>
      );
    case 'clear':
      return <ClearAllLessons>{children}</ClearAllLessons>;
    default:
      return <LessonBtnsStyle>{children}</LessonBtnsStyle>;
  }
};
