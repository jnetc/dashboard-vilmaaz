import { FC } from 'react';
import styled from 'styled-components';

const LessonCommonProgressStyle = styled.svg<{ secondary: string }>`
  position: absolute;
  top: 0;
  left: 1px;
  fill: ${({ theme }) => theme.bg_middle()};
  stroke: var(--${({ secondary }) => secondary});
  stroke-width: 2;
  stroke-dasharray: 12;
  transition: stroke 0.3s ease-in-out;
`;

export const LessonCommonProgress: FC<{
  length: number;
  secondary: string;
}> = ({ length, secondary }) => {
  const strokeWidth = 2;
  return (
    <LessonCommonProgressStyle
      height="70"
      width="100%"
      secondary={secondary}
      className="common-progress">
      <rect
        x="0"
        y="2.3"
        width={length - strokeWidth}
        height="66"
        rx="35"
        ry="35"
      />
    </LessonCommonProgressStyle>
  );
};
