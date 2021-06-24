import { RightPanelStyle } from '@styles/right-panel';

import { useStore } from '@Hooks/useStore';

import { PanelProfile } from './PanelProfile';

const RightPanel = () => {
  const { content } = useStore();

  console.log(content);
  const profiles = content.map(prof => {
    const { id, avatar, colors, name, start, end } = prof;
    const dataProfile = { id, avatar, colors, name, start, end };

    return <PanelProfile key={id} data={dataProfile} />;
  });

  return (
    <RightPanelStyle>
      <h3>Profiilit</h3>
      <div className="profiles">{profiles}</div>
    </RightPanelStyle>
  );
};

export default RightPanel;
