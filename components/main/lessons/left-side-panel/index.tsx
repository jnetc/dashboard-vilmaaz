import { FC, useEffect, useRef } from 'react';
// Components
import CtrlButton, {
  MenuHideBottonStyle,
} from '@Buttons/ctrl-button/CtrlButton';
import { DraggableArea } from '@Main/lessons/left-side-panel/DraggableArea';
// Store
import { useGlobalStore } from '@Store/GlobalStore';
// Types
import { Element } from '@types';
// Styles
import { LeftSidePanelStyle } from './styles/left-panel-styles';

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
