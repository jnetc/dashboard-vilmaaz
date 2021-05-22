import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
// Hook
import { useRealtime } from '@Main/lessons/hook/useRealtime';
// Types
import { Lesson, LessonsColor } from '@types';

const ProgressLessonStyle = styled.div`
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
    position: relative;
    margin: auto;
    border-radius: 50%;
    border: 2px solid var(--brown); // TODO смена цвета / логическое
    background-color: var(--bg-regular); // TODO смена цвета / логическое
    // TODO Удаление, создание псевдокласса при активности / логическое
    &::after {
      content: '';
      width: 6px;
      height: 6px;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: inherit;
      background-color: var(--brown);
      transform: translate(-50%, -50%);
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
    background-color: var(--brown); // TODO смена цвета / логическое
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

  const realtime = useRealtime(minutes);
  console.log(realtime);

  console.log('Каждый урок', data, color);

  return (
    <ProgressLessonStyle>
      <div className="marker" />
      <time>
        {data.time.start} - {data.time.end}
      </time>
      <h4>{data.lesson}</h4>
    </ProgressLessonStyle>
  );
};
