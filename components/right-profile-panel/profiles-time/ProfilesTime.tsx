import { FC } from 'react';
import { ProfilesTimeStyle } from './ProfilesTime.style';
// Hook
import { useUpdateTime } from '@Hooks/useUpdateTime';
// Helper func
import { transformNumToTime, profileStatus } from 'utils/helperFunctions';
// Type
import { ProfilesTimeType } from '@Types';

export const ProfilesTime: FC<{ data: ProfilesTimeType }> = ({ data }) => {
  const { position } = useUpdateTime();
  const { today, activeDay, starttime, endtime } = data;
  const timeDecrease = endtime - position;

  const { hours, minutes } = transformNumToTime(timeDecrease);

  const { status } = profileStatus(
    today,
    activeDay,
    starttime,
    endtime,
    position
  );

  switch (status) {
    case 'pending':
      return <ProfilesTimeStyle>Odotettaessa</ProfilesTimeStyle>;
    case 'current':
      return (
        <ProfilesTimeStyle>
          Aika jäljellä
          <time>
            {hours}
            <b>:</b>
            {minutes > 9 ? minutes : `0${minutes}`}
          </time>
        </ProfilesTimeStyle>
      );
    case 'finished':
      return <ProfilesTimeStyle>Päättynyt</ProfilesTimeStyle>;
    case 'active day':
      return <ProfilesTimeStyle>Odotettaessa</ProfilesTimeStyle>;
    default:
      return <ProfilesTimeStyle>Lepo</ProfilesTimeStyle>;
  }
};
