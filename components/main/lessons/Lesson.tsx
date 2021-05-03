import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

import { LessonsPosProps, LessonStyleType } from '@Main/lessons/types';

import {
  transformTimeToStep,
  lessonProgress,
  tick,
} from '@Main/lessons/utils/timeline';

import { Done, EndTime, Time, Wait } from '../../icons/Lesson';

const LessonStyle = styled.div<LessonStyleType>`
  width: ${({ distance }) => distance}px;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  left: ${({ pos }) => pos}px;
  border-radius: 35px;
  cursor: pointer;
  & .progress {
    height: 68px;
    position: relative;
    padding: 10px;
    position: relative;
    border-radius: inherit;
    background-color: ${({ theme }) => theme.bg_middle};
    border: 2px solid var(--${({ primaryColor }) => primaryColor});
    box-shadow: 0 10px 10px ${({ theme }) => theme.shadow(0.2)},
      0 30px 30px ${({ theme }) => theme.shadow(0.15)};
    transition: width 0.3s ease-in-out;
    z-index: 5;
    & .progress-avatar,
    & .progress-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${({ theme }) => theme.bg_light};
    }
    & .progress-avatar {
      left: 7px;
      object-fit: cover;
      z-index: 2;
    }
    & .progress-icon {
      right: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.bg_light};
      box-shadow: 0 10px 10px ${({ theme }) => theme.shadow(0.2)},
        0 30px 30px ${({ theme }) => theme.shadow(0.15)};
      z-index: 3;
    }
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    fill: ${({ theme }) => theme.bg_middle};
    stroke: var(--${({ secondaryColor }) => secondaryColor});

    stroke-width: 2;
    stroke-dasharray: 12;
    transition: stroke 0.3s ease-in-out;
  }
  &:hover {
    svg {
      stroke: var(--${({ primaryColor }) => primaryColor});
    }
  }
`;

const Lesson: FC<LessonsPosProps> = ({ data }) => {
  let [hours, setHours] = useState<number | null>(new Date().getHours());
  let [minutes, setMinutes] = useState<number | null>(new Date().getMinutes());

  const strokeWidth = 2;
  const lengthLessons = data.end - data.start;

  useEffect(() => {
    let time = tick(setMinutes, setHours);

    return () => {
      clearInterval(time);
      minutes = null;
      hours = null;
    };
  }, [minutes]);

  // const realTime = transformTimeToStep(`11:00`);
  const realTime = transformTimeToStep(`${hours}:${minutes}`);

  const { pos, status } = lessonProgress(
    data.start,
    lengthLessons,
    realTime.position
  );

  console.log(status, pos);

  return (
    <LessonStyle
      pos={data.start}
      distance={lengthLessons}
      primaryColor={data.primaryColor}
      secondaryColor={data.secondaryColor}
      className="timefield-lesson">
      <div className="progress" style={{ width: pos }}>
        <div className="progress-avatar">ava</div>
        <div className="progress-icon">ico</div>
      </div>
      <svg height="70" width="100%">
        <rect
          x="2"
          y="2.2"
          width={lengthLessons - strokeWidth}
          height="66"
          rx="35"
          ry="35"
        />
      </svg>
    </LessonStyle>
  );
};

export default Lesson;
