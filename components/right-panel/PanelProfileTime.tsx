import { FC } from 'react';
import { PanelProfileTimeStyle } from '@styles/right-panel';
// Hook
import { useUpdate } from '@Hooks/useUpdate';
// Helper func
import { transformNumToTime, profileStatus } from '@Utils/helperFunc';
// Type
import { PanelProfileTimeType } from '@types';

export const PanelProfileTime: FC<{ data: PanelProfileTimeType }> = ({
  data,
}) => {
  const { position } = useUpdate();
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

  console.log(status);
  switch (status) {
    case 'pending':
      return <PanelProfileTimeStyle>Odotettaessa</PanelProfileTimeStyle>;
    case 'current':
      return (
        <PanelProfileTimeStyle>
          Päätty
          <time>
            {hours}
            <b>:</b>
            {minutes > 9 ? minutes : `0${minutes}`}
          </time>
        </PanelProfileTimeStyle>
      );
    case 'finished':
      return <PanelProfileTimeStyle>Päättynyt</PanelProfileTimeStyle>;
    case 'active day':
      return <PanelProfileTimeStyle>Odotettaessa</PanelProfileTimeStyle>;
    default:
      return <PanelProfileTimeStyle>Lepo</PanelProfileTimeStyle>;
  }
};
