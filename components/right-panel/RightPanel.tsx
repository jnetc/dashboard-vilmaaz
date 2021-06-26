import { RightPanelStyle } from '@styles/right-panel';
// Hook
import { useStore } from '@Hooks/useStore';
// Component
import { PanelProfile } from './PanelProfile';
// Logo
import { Logotip } from '@Icons/Logos';

const RightPanel = () => {
  const { content } = useStore();

  const profiles = content.map(prof => {
    const { id, avatar, colors, name, start, end } = prof;
    const lessons = prof.timetable.filter(l => l.lesson !== 'taukko').length;
    const dataProfile = { id, avatar, colors, name, start, end, lessons };

    return <PanelProfile key={id} data={dataProfile} />;
  });

  return (
    <RightPanelStyle>
      <Logotip />
      <h3>Profiilit</h3>
      <div className="profiles">{profiles}</div>
    </RightPanelStyle>
  );
};

export default RightPanel;
