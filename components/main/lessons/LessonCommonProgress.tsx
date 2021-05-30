import { FC } from 'react';
// Styles
import { LessonCommonProgressStyle } from './styles/lessons';

export const LessonCommonProgress: FC<{
  length: number;
  shade: string;
}> = ({ length, shade }) => {
  const strokeWidth = 2;
  return (
    <LessonCommonProgressStyle
      height="70"
      width="100%"
      shade={shade}
      className="common-progress">
      <rect
        x="0"
        y="2"
        width={length - strokeWidth}
        height="66"
        rx="35"
        ry="35"
      />
    </LessonCommonProgressStyle>
  );
};
