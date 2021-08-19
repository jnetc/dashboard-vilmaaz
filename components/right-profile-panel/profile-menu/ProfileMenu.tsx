import { FC, useRef, useEffect } from 'react';
import { ProfileMenuStyle } from './ProfileMenu.style';
import { MenuCloseBtnStyle } from './CloseBtnMenu.style';
import { ScheduleIcon, UserIcon, WeekDayIcon } from '@Icons/ProfileMenu';
// Hook
import { useMainStore } from '@Hooks/useStores';

interface ProfileMenu {
  open: boolean;
  id: string;
  closeMenu: (close: boolean) => void;
}

export const ProfileMenu: FC<ProfileMenu> = ({ open, id, closeMenu }) => {
  const { setOpenModal, setStep } = useMainStore();
  const ref = useRef<HTMLDivElement>(null);

  const openProfile = () => {
    setOpenModal(true);
    setStep({ value: 'profile', id: id });
    closeMenu(false);
  };
  const openWeekDay = () => {
    setOpenModal(true);
    setStep({ value: 'days', id: id });
    closeMenu(false);
  };
  const openSchedule = () => {
    setOpenModal(true);
    setStep({ value: 'schedule', id: id });
    closeMenu(false);
  };

  useEffect(() => {
    const outSideClick = (ev: HTMLElementEventMap['click']) => {
      const el = ev.target as HTMLDivElement;
      if (!el.closest('.submenu')) {
        closeMenu(false);
        document.body.removeEventListener('mousedown', outSideClick, true);
      }
    };
    document.body.addEventListener('mousedown', outSideClick, true);
    return () => {
      document.body.removeEventListener('mousedown', outSideClick, true);
    };
  }, []);

  return (
    <ProfileMenuStyle open={open} className="submenu" ref={ref}>
      <button className="profile-menu-item" onClick={openProfile}>
        <UserIcon />
        <span>Muokka profiili</span>
      </button>
      <button className="profile-menu-item" onClick={openWeekDay}>
        <WeekDayIcon />
        <span>Lisää viikonpäivät</span>
      </button>
      <button className="profile-menu-item" onClick={openSchedule}>
        <ScheduleIcon />
        <span>Lukujärjestys</span>
      </button>
      <MenuCloseBtnStyle role="button" onClick={() => closeMenu(false)} />
    </ProfileMenuStyle>
  );
};
