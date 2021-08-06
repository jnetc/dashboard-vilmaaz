import { FC } from 'react';
import { ProfileMenuStyle } from './ProfileMenu.style';
import { MenuCloseBtnStyle } from './CloseBtnMenu.style';
import { ScheduleIcon, UserIcon, WeekDayIcon } from '@Icons/ProfileMenu';

interface ProfileMenu {
  open: boolean;
  id: string;
  closeMenu: (close: boolean) => void;
}

export const ProfileMenu: FC<ProfileMenu> = ({ open, id, closeMenu }) => {
  const openProfile = () => {
    console.log('openProfile', id);
    closeMenu(false);
  };
  const openWeekDay = () => {
    console.log('openWeekDay', id);
    closeMenu(false);
  };
  const openSchedule = () => {
    console.log('openSchedule', id);
    closeMenu(false);
  };

  return (
    <ProfileMenuStyle open={open}>
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
