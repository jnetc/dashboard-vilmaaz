import { FC, useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
// Hook
import { useRealtime } from '@Main/lessons/hook/useRealtime';
// Types
import { Lesson, LessonsColor, ProgressLessonsDataStyle } from '@types';
// Helper functions
import { transformTimeToNum } from '@Store/utils/helperFunc';

const markerPoint = keyframes`
  50% {transform: scale(0.5) }
`;

const ProgressLessonStyle = styled.div<ProgressLessonsDataStyle>`
  display: grid;
  grid-template-columns: 3.125rem 1fr;
  grid-template-rows: repeat(2, 1.563rem);
  gap: 4px;
  transition: all 0.3s ease-in-out;
  & .marker {
    grid-column: 1;
    grid-row: 1 / -1;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: auto;
    border-radius: 50%;
    border-style: solid;
    border-width: 2px;
    border-color: ${({ flow, colors }) =>
      flow.process === 'wait'
        ? css`var(--${colors.shade})`
        : css`var(--${colors.accent})`};

    z-index: 1;

    & .marker-point {
      width: 8px;
      height: 8px;
      border-radius: inherit;

      background-color: ${({ flow, colors }) =>
        flow.process === 'wait' ? `transparent` : css`var(--${colors.accent})`};

      animation: ${({ flow }) =>
        flow.process === 'run'
          ? css`
              ${markerPoint} 1s ease-in-out infinite
            `
          : ''};

      z-index: 5;
    }
  }
  &:not(:last-child) .marker::before {
    content: '';
    width: 4px;
    height: 48px;
    position: absolute;
    top: 12px;
    left: 4px;
    background: ${({ flow, colors }) =>
      flow.process === 'wait'
        ? css`var(--${colors.shade})`
        : css`var(--${colors.accent})`};
    z-index: -1;
  }

  time {
    grid-column: 2;
    grid-row: 1;
    align-self: flex-end;
    color: ${({ theme }) => theme.grey_light()};
    font-size: ${({ theme }) => theme.fontsize_14};
  }
  h4 {
    grid-column: 2;
    grid-row: 2;
    color: ${({ theme }) => theme.white()}; // TODO смена цвета / логическое
    font-size: ${({ theme }) => theme.fontsize_16};
  }
`;

// TODO Вывести список уроков

export const ProgressLesson: FC<{ data: Lesson; color: LessonsColor }> = ({
  data,
  color,
}) => {
  const [minutes, setMinutes] = useState<number>(new Date().getMinutes());

  useEffect(() => {
    let timer = setInterval(() => setMinutes(new Date().getMinutes()), 1000);
    return () => clearInterval(timer);
  }, [minutes]);

  const { currentTimeNum } = useRealtime(minutes);
  const startLesson = transformTimeToNum(data.time.start);
  const endLesson = transformTimeToNum(data.time.end);

  const flow = { process: 'wait' };

  if (startLesson <= currentTimeNum) {
    flow.process = 'run';
  }
  if (endLesson < currentTimeNum) {
    flow.process = 'done';
  }

  return (
    <ProgressLessonStyle colors={color} flow={flow}>
      <div className="marker">
        <div className="marker-point" />
      </div>
      <time>
        {data.time.start} - {data.time.end}
      </time>
      <h4>{data.lesson}</h4>
    </ProgressLessonStyle>
  );
};
