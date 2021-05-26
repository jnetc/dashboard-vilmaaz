import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
// Components
import CtrlButton, {
  MenuHideBottonStyle,
} from '@Buttons/ctrl-button/CtrlButton';
import { DraggableArea } from '@Main/lessons/left-side-panel/DraggableArea';
// Store
import { useGlobalStore } from '@Store/GlobalStore';
// Types
import { Element } from '@types';

const LeftSidePanelStyle = styled.div`
  min-width: 140px;
  display: grid;
  justify-content: center;
  grid-template-rows: 60px 1fr;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 35px;
  background-color: ${({ theme }) => theme.bg_middle(0.8)};
  backdrop-filter: blur(4px);
  z-index: 100;
  /* pointer-events: none; */
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    pointer-events: none;
  }
  &::after {
    width: 20px;
    right: -20px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.bg_middle(1)} 0%,
      ${({ theme }) => theme.bg_middle(0)} 100%
    );
  }
  &::before {
    width: 100px;
    left: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.bg_middle(1)} 0%,
      ${({ theme }) => theme.bg_middle(0)} 100%
    );
  }
`;

export const LeftSidePanel: FC = () => {
  const { setMainPaddingLeft, setOpenMenu, openMenu } = useGlobalStore();
  const sidepanelEl = useRef<Element>(null);

  useEffect(() => {
    if (sidepanelEl.current) {
      setMainPaddingLeft(sidepanelEl.current.offsetWidth);
    }
  }, []);

  const hidemenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <LeftSidePanelStyle ref={sidepanelEl}>
      <CtrlButton
        onClick={hidemenu}
        gridpos={{ row: 1, align: 'center', justify: 'center' }}>
        <MenuHideBottonStyle />
      </CtrlButton>
      <DraggableArea />
    </LeftSidePanelStyle>
  );
};
