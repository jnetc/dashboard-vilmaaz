import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useMainStore } from '@Store/MainStore';

import { DayOfWeek } from '@Main/lessons/right-side-panel/DayOfWeek';
import { ProgressBar } from '@Main/lessons/right-side-panel/ProgressBar';
import CtrlButton, { CloseButtonStyle } from '@Buttons/ctrl-button/CtrlButton';

const RightSidePanelStyle = styled.section<{ open: boolean }>`
  min-width: 300px;
  display: ${({ open }) => (open ? 'grid' : 'none')};
  grid-template-rows: repeat(2, 48px) 300px 40px 1fr;
  padding: 35px 30px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  backdrop-filter: blur(4px);
  border-radius: 30px 0 0 30px;
  background-color: ${({ theme }) => theme.bg_regular(0.7)};
  box-shadow: 0px 40px 40px ${props => props.theme.bg_dark(0.2)},
    0px 10px 10px ${props => props.theme.bg_dark(0.3)};
  z-index: 100;
  user-select: none;
  h2 {
    grid-row: 2;
    align-self: flex-end;
  }
`;

const RightSidePanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightSidePanel: FC = () => {
  const {
    detailLesson: { open, data },
    setDetailLesson,
    setAutoMovement,
  } = useMainStore();

  const [progressBar, setProgressBar] = useState({
    line: '',
    bar: '',
    start: '',
    end: '',
  });

  useEffect(() => {
    if (data) {
      const lastTimeEnd = data.timetable.length - 1;

      setProgressBar({
        start: data.timetable[0].time.start,
        end: data.timetable[lastTimeEnd].time.end,
        line: data.primaryColor,
        bar: data.secondaryColor,
      });
    }
  }, [data]);

  const openPanel = () => {
    setDetailLesson({ open: false, data: undefined });
    setAutoMovement(true);
  };

  useEffect(() => {});

  return open && data ? (
    <RightSidePanelStyle open={open}>
      <RightSidePanelHeader>
        <CtrlButton onClick={() => openPanel()}>
          <CloseButtonStyle />
        </CtrlButton>
        <DayOfWeek />
      </RightSidePanelHeader>
      <h2>{data?.name}</h2>
      <ProgressBar data={progressBar} />
    </RightSidePanelStyle>
  ) : (
    <></>
  );
};
