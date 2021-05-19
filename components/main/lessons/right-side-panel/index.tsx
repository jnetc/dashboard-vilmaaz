import { FC, useEffect } from 'react';
import styled from 'styled-components';

import { useMainStore } from '@Store/MainStore';

import { DayOfWeek } from '@Main/lessons/right-side-panel/DayOfWeek';
import { RightSideProgress } from '@Main/lessons/right-side-panel/RightSideProgress';
import CtrlButton, { CloseButtonStyle } from '@Buttons/ctrl-button/CtrlButton';

const RightSidePanelStyle = styled.section<{ open: boolean }>`
  min-width: 300px;
  display: ${({ open }) => (open ? 'grid' : 'none')};
  grid-template-rows: 48px 250px 100px 1fr;
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

  const openPanel = () => {
    setDetailLesson({ open: false, data: undefined });
    setAutoMovement(true);
  };

  useEffect(() => {});

  return open ? (
    <RightSidePanelStyle open={open}>
      <RightSidePanelHeader>
        <CtrlButton onClick={() => openPanel()}>
          <CloseButtonStyle />
        </CtrlButton>
        <DayOfWeek />
      </RightSidePanelHeader>
      <RightSideProgress>
        {/* {data?.name} */}
        {/* <ListLessons /> */}
      </RightSideProgress>
    </RightSidePanelStyle>
  ) : (
    <></>
  );
};
