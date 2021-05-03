import { FC, MouseEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Aside } from '@Aside/Aside';
import { DayOfWeek } from '@Aside/lessons/DayOfWeek';

import CtrlButton from '@Buttons/ctrl-button/CtrlButton';

import ListLessons from '@Aside/lessons/current/ListLessons';

const LessonsAsideStyle = styled.h2`
  margin-bottom: 50px;
`;

const AsideHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const LessonsAside: FC = () => {
  const sendLesson = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault;
    console.log('log');
  };

  useEffect(() => {});

  return (
    <Aside>
      <AsideHeader>
        <CtrlButton />
        <DayOfWeek />
      </AsideHeader>
      <LessonsAsideStyle>
        <ListLessons />
        <button onClick={sendLesson}>send data</button>
      </LessonsAsideStyle>
    </Aside>
  );
};
