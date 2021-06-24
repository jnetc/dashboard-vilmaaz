import { FC } from 'react';
import { PanelProfileTimeStyle } from '@styles/right-panel';
// Hook
import { useUpdate } from '@Hooks/useUpdate';
// Helper func
import { transformNumToTime } from '@Utils/helperFunc';

export const PanelProfileTime: FC<{ endtime: number }> = ({ endtime }) => {
  const { position } = useUpdate();
  const timeDecrease = endtime - position;

  const { hours, minutes } = transformNumToTime(timeDecrease);
  return (
    <PanelProfileTimeStyle>
      {minutes >= 0 ? `Koulu päätty` : 'Koulu loppu'}
      {minutes >= 0 ? (
        <time>
          {hours}:{minutes}
        </time>
      ) : (
        <></>
      )}
    </PanelProfileTimeStyle>
  );
};
