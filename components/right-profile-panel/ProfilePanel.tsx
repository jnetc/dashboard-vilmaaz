import { useEffect, useRef } from 'react';
import { ProfilePanelStyle } from './ProfilePanel.style';
// Hook
import { useGlobalStore, useMainStore } from '@Hooks/useStores';
// Component
import { Profiles } from '@RightProfilePanel/profiles/Profiles';
import { AddProfileButton } from '@RightProfilePanel/add-profile-button/AddProfileButton';
// Logo
import { Logotip } from '@Icons/Logos';

const ProfilePanel = () => {
  const { content, today, activeDay } = useGlobalStore();
  const { setProfileLine } = useMainStore();
  const ref = useRef<HTMLDivElement>(null);

  const profiles = content.map(prof => {
    const { id, avatar, color, name, end, start } = prof;
    const lessons = prof.timetable[0].lessons.filter(
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

  useEffect(() => {
    const outSideClick = (ev: HTMLElementEventMap['click']) => {
      const el = ev.target as HTMLDivElement;
      const root = el.closest('.profile');
      if (root) {
        const color = root.getAttribute('data-color');
        const id = root.id;
        setProfileLine({ id: id, color: color || '' });
        return;
      }
      if (!root) {
        setProfileLine({ id: '', color: '' });
        return;
      }
    };
    document.addEventListener('mousedown', outSideClick, true);
    return () => {
      document.removeEventListener('mousedown', outSideClick, true);
    };
  }, []);

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
