import { FC } from 'react';
import Image from 'next/image';
import { ProfilesStyle } from './Profiles.style';
// Type
import { ProfilesType } from '@Types';
// Component
import { ProfilesTime } from '@RightProfilePanel/profiles-time/ProfilesTime';
// Hook
import { useMainStore } from '@Hooks/useStores';

export const Profiles: FC<{ data: ProfilesType }> = ({ data }) => {
  const { setProfileLine } = useMainStore();
  const { avatar, name, end, start, lessons, today, activeDay, id, color } =
    data;
  const timedata = {
    endtime: end.position,
    starttime: start.position,
    today,
    activeDay,
  };

  const noticeLine = () => {
    setProfileLine({ id, color });
  };

  return (
    <ProfilesStyle onMouseEnter={noticeLine}>
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
      <button>•</button>
    </ProfilesStyle>
  );
};
