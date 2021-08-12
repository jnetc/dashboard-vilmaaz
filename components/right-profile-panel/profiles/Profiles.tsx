import { FC, useState } from 'react';
import Image from 'next/image';
import { ProfilesStyle } from './Profiles.style';
// Type
import { ProfilesType } from '@Types';
// Component
import { ProfilesTime } from '@RightProfilePanel/profiles-time/ProfilesTime';
import { ProfileMenu } from '@RightProfilePanel/profile-menu/ProfileMenu';

export const Profiles: FC<{ data: ProfilesType }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { avatar, name, end, start, lessons, today, activeDay, id, color } =
    data;
  const timedata = {
    endtime: end.position,
    starttime: start.position,
    today,
    activeDay,
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = (close: boolean) => {
    setIsOpen(close);
  };

  return (
    <ProfilesStyle id={id} data-color={color} className="profile">
      <figure>
        {avatar.img ? (
          <Image
            src={avatar.img}
            alt={name}
            width={60}
            height={60}
            layout="fixed"
          />
        ) : (
          <figcaption>{avatar.name}</figcaption>
        )}
      </figure>
      <h4>{name}</h4>
      <ProfilesTime data={timedata} />
      <p className="amount">
        Oppitunnit <b>{activeDay ? lessons : 0}</b>
      </p>
      <div
        className="profile-menu"
        role="button"
        tabIndex={0}
        onClick={openMenu}>
        •
      </div>
      {isOpen ? (
        <ProfileMenu open={isOpen} id={id} closeMenu={closeMenu} />
      ) : null}
    </ProfilesStyle>
  );
};
