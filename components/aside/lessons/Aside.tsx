import { FC, useEffect } from 'react';
import styled from 'styled-components';

import { useMainStore } from '@Store/MainStore';

import { DayOfWeek } from '@Aside/lessons/DayOfWeek';
import { AsideProgress } from '@Aside/lessons/AsideProgress';
import CtrlButton from '@Buttons/ctrl-button/CtrlButton';

const AsideStyle = styled.aside<{ open: boolean }>`
  min-width: 300px;
  display: ${({ open }) => (open ? 'grid' : 'none')};
  grid-template-rows: 48px 250px 100px 1fr;
  padding: 35px 30px;
  overflow-y: auto;
  backdrop-filter: blur(4px);
  border-radius: 30px 0 0 30px;
  background-color: ${({ theme }) => theme.bg_regular(0.7)};
  box-shadow: 0px 40px 40px ${props => props.theme.bg_dark(0.2)},
    0px 10px 10px ${props => props.theme.bg_dark(0.3)};
  z-index: 100;
`;

const AsideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Aside: FC = () => {
  const {
    detailLesson: { open, data },
    setDetailLesson,
    setAutoMovement,
  } = useMainStore();

  const openAside = () => {
    setDetailLesson({ open: false, data: undefined });
    setAutoMovement(true);
  };

  useEffect(() => {});

  return (
    <AsideStyle open={open}>
      <AsideHeader>
        <CtrlButton onClick={() => openAside()} />
        <DayOfWeek />
      </AsideHeader>
      <AsideProgress>
        {/* {data?.name} */}
        {/* <ListLessons /> */}
      </AsideProgress>
    </AsideStyle>
  );
};
