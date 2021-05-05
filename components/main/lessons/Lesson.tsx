import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

import { LessonDataProps, Position, Distance } from '@types';

import { lessonProgress } from '@Main/lessons/utils/timeline';

import { useRealtime } from '@Main/lessons/hook/useRealtime';

import { LessonStatusIcon } from '@Main/lessons/LessonStatusIcon';
import { LessonCommonProgress } from '@Main/lessons/LessonCommonProgress';
import { LessonAvatarProgress } from '@Main/lessons/LessonAvatarProgress';

const LessonStyle = styled.div<Distance & { primary: string } & Position>`
  width: ${({ distance }) => distance}px;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  left: ${({ position }) => position}px;
  border-radius: 35px;
  cursor: pointer;
  z-index: 4;
  & .progress {
    height: 68px;
    position: relative;
    padding: 10px;
    position: relative;
    border-radius: inherit;
    background-color: ${({ theme }) => theme.bg_middle};
    border: 2px solid var(--${({ primary }) => primary});
    box-shadow: 0 10px 10px ${({ theme }) => theme.shadow(0.2)},
      0 30px 30px ${({ theme }) => theme.shadow(0.15)};
    transition: width 0.3s ease-in-out;
    z-index: 5;
    & .progress-avatar,
    & .progress-icon {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${({ theme }) => theme.bg_light};
      transition: all 0.3s ease-in-out;
    }
    & .progress-avatar {
      left: 7px;
      object-fit: cover;
      z-index: 2;
    }
    & .progress-icon {
      right: 7px;
      z-index: 3;
    }
  }
  &:hover {
    > svg {
      stroke: var(--${({ primary }) => primary});
    }
  }
`;

const Lesson: FC<{ data: LessonDataProps }> = ({ data }) => {
  const [minutes, setMinutes] = useState<number>(new Date().getMinutes());

  const lengthLessons = data.end - data.start;

  useEffect(() => {
    let timer = setInterval(() => setMinutes(new Date().getMinutes()), 1000);
    return () => clearInterval(timer);
  }, [minutes]);

  const realTime = useRealtime(minutes);

  const { pos, status } = lessonProgress(
    data.start,
    lengthLessons,
    realTime.position
  );

  return (
    <LessonStyle
      position={data.start}
      distance={lengthLessons}
      primary={data.primaryColor}
      className="timefield-lesson">
      <div className="progress" style={{ width: pos }}>
        <LessonAvatarProgress avatar={data.avatar} />
        <LessonStatusIcon status={status} />
      </div>
      <LessonCommonProgress
        length={lengthLessons}
        secondary={data.secondaryColor}
      />
    </LessonStyle>
  );
};

export default Lesson;
