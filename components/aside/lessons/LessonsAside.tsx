import { FC, useEffect } from 'react';
import styled from 'styled-components';

import { useMainStore } from '@Store/MainStore';
import { useGlobalStore } from '@Store/GlobalStore';
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

const Perespective = styled.div`
  /* transform: rotateY(45deg); */
`;

export const LessonsAside: FC = () => {
  const {
    setDetailLesson,

    detailLesson: { id },
  } = useMainStore();
  const { setAutoMovement } = useGlobalStore();

  const openAside = () => {
    setDetailLesson({ open: false, id: undefined });
    setAutoMovement(true);
    console.log('click');
  };

  // console.log(id);

  useEffect(() => {});

  return (
    <Aside>
      <Perespective className="perespective">
        <AsideHeader>
          <CtrlButton onClick={() => openAside()} />
          <DayOfWeek />
        </AsideHeader>
        <LessonsAsideStyle>
          {id}
          <ListLessons />
        </LessonsAsideStyle>
      </Perespective>
    </Aside>
  );
};
