import { FC, useRef, MouseEventHandler } from 'react';
// Helper function
import { dateFormat } from '@Utils/helperFunc';
// Styles
import { DaysOfWeekStyle } from '@styles/header';
// Component
import { DayOfWeek } from './DayOfWeek';
// Type
import { Element } from '@types';
// Hook
import { useStore } from '@Hooks/useStore';

import { daysOfWeek } from '@Store/daysOfWeek';

export const DaysOfWeek: FC = () => {
  const { setDayOfWeek } = useStore();
  const ref = useRef<Element | null>(null);
  const children = ref.current?.querySelectorAll('button');

  const today = dateFormat({ weekday: 'long' });

  const getDaySchedule: MouseEventHandler<Element> = ev => {
    const event = ev.target as Element;
    const isTarget = event?.dataset.day;

    children?.forEach(btn => {
      const isEqual = btn.dataset.day;

      if (isTarget === isEqual) {
        btn.classList.add('active');
        isEqual && setDayOfWeek(isEqual);
      }
      if (isTarget !== isEqual) {
        btn.classList.remove('active');
      }
      if (today === isEqual) {
        btn.classList.add('current');
      }
      if (today === isEqual && isTarget === isEqual) {
        btn.classList.remove('current');
      }
    });
  };

  const days = daysOfWeek.map(d => {
    return <DayOfWeek key={d} day={d} today={today} />;
  });

  return (
    <DaysOfWeekStyle ref={ref} onClick={getDaySchedule}>
      {days}
    </DaysOfWeekStyle>
  );
};
