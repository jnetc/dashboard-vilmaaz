import { ProfilePanelStyle } from './ProfilePanel.style';
// Hook
import { useGlobalStore } from '@Hooks/useStores';
// Component
import { Profiles } from '@RightProfilePanel/profiles/Profiles';
import { AddProfileButton } from '@RightProfilePanel/add-profile-button/AddProfileButton';
// Logo
import { Logotip } from '@Icons/Logos';

const ProfilePanel = () => {
  const { content, today, activeDay } = useGlobalStore();

  const profiles = content.map(prof => {
    const { id, avatar, color, name, end, start } = prof;
    const lessons = prof.timetable?.filter(l => l.lesson !== 'taukko').length;
    const dataProfile = {
      id,
      avatar,
      color,
      name,
      start,
      end,
      today,
      activeDay,
      lessons,
    };

    return <Profiles key={id} data={dataProfile} />;
  });

  return (
    <ProfilePanelStyle>
      <Logotip />
      <h3>Profiilit</h3>
      <div className="profiles">{profiles}</div>
      <AddProfileButton />
    </ProfilePanelStyle>
  );
};

export default ProfilePanel;
