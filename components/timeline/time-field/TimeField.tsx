import { FC } from 'react';
// Component
import Lessons from '@Lessons/Lessons';
// Hook
import { useGlobalStore, useMainStore } from '@Hooks/useStores';

// Styles
import { TimeFieldStyle } from './TimeField.style';

export const TimeField: FC = () => {
  const { content } = useGlobalStore();
  const { profileLine } = useMainStore();

  const lessons = content.map(data => {
    if (profileLine.id.includes(data.id)) {
      return (
        <Lessons key={data.id} data={data} lineColor={profileLine.color} />
      );
    }
    return <Lessons key={data.id} data={data} />;
  });

  return <TimeFieldStyle id="time-field">{lessons}</TimeFieldStyle>;
};
