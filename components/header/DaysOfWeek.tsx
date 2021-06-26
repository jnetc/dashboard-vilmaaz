import { FC, useRef, MouseEventHandler } from 'react';
// Helper function
import { dateFormat } from '@Utils/helperFunc';
// Styles
import { DaysOfWeekStyle } from '@styles/header';
// Component
import { DayOfWeek } from './DayOfWeek';
// Type
import { Element } from '@types';

export const DaysOfWeek: FC = () => {
  const ref = useRef<Element | null>(null);
  const children = ref.current?.querySelectorAll('button');

  let date: Date = new Date();
  const day = dateFormat({ weekday: 'short' }, date);
  const currentDayOfWeek = day.replace(day[0], day[0].toUpperCase());

  // Day Of the week
  const daysOfWeek = [
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai',
    'Sunnuntai',
  ];

  const getDaySchedule: MouseEventHandler<Element> = ev => {
    const event = ev.target as Element;
    const isTarget = event?.textContent;

    children?.forEach(btn => {
      const isEqual = btn?.textContent;

      if (isTarget === isEqual) {
        btn.classList.add('active');
      }
      if (isTarget !== isEqual) {
        btn.classList.remove('active');
      }
      if (currentDayOfWeek === isEqual) {
        btn.classList.add('current');
      }
      if (currentDayOfWeek === isEqual && isTarget === isEqual) {
        btn.classList.remove('current');
      }
    });
  };

  const days = daysOfWeek.map(d => {
    return <DayOfWeek key={d} day={d} today={currentDayOfWeek} />;
  });

  return (
    <DaysOfWeekStyle ref={ref} onClick={getDaySchedule}>
      {days}
    </DaysOfWeekStyle>
  );
};
