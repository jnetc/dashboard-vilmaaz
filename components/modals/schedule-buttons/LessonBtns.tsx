import { FC } from 'react';
import {
  LessonBtnsStyle,
  ClearAllLessons,
  LessonAdd,
} from './LessonBtns.style';

type ButtonStyleType = 'add' | 'clear';
interface LessonButtonType {
  style?: ButtonStyleType;
  onClick: () => void;
}

export const LessonBtns: FC<LessonButtonType> = ({
  style,
  onClick,
  children,
}) => {
  switch (style) {
    case 'add':
      return (
        <LessonAdd role="button" onClick={onClick} tabIndex={0}>
          {children}
        </LessonAdd>
      );
    case 'clear':
      return (
        <ClearAllLessons role="button" onClick={onClick}>
          {children}
        </ClearAllLessons>
      );
    default:
      return (
        <LessonBtnsStyle role="button" onClick={onClick}>
          {children}
        </LessonBtnsStyle>
      );
  }
};
