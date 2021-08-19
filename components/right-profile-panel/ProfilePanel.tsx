import { useRef } from 'react';
import { ProfilePanelStyle } from './ProfilePanel.style';
// Hook
import { useGlobalStore } from '@Hooks/useStores';
// Component
import { Profiles } from '@RightProfilePanel/profiles/Profiles';
import { AddProfileButton } from '@RightProfilePanel/add-profile-button/AddProfileButton';
// Logo
import { Logotip } from '@Icons/Logos';

const ProfilePanel = () => {
  const { content, today, activeDay, dayOfWeek } = useGlobalStore();

  const ref = useRef<HTMLDivElement>(null);

  const profiles = content.map(prof => {
    const { id, avatar, color, name, end, start } = prof;

    const getCurrentTimetable = prof.timetable.find(
      tb => tb.day === dayOfWeek && tb.lessons
    );

    const lessons = getCurrentTimetable?.lessons.filter(
      l => l.lesson !== 'taukko'
    ).length;
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
      <div className="profiles" ref={ref}>
        {profiles}
      </div>
      <AddProfileButton />
    </ProfilePanelStyle>
  );
};

export default ProfilePanel;
