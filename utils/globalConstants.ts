export const colors = [
  { en: 'brown', fi: 'ruskea' },
  { en: 'green', fi: 'vihreä' },
  { en: 'pink', fi: 'pinkki' },
  { en: 'violet', fi: 'violetti' },
  { en: 'blue', fi: 'sininen' },
];

export const daysOfWeek = [
  'maanantai',
  'tiistai',
  'keskiviikko',
  'torstai',
  'perjantai',
  'lauantai',
  'sunnuntai',
];

export const hours = [
  '0:00',
  '1:00',
  '2:00',
  '3:00',
  '4:00',
  '5:00',
  '6:00',
  '7:00',
  '8:00',
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

export const minutesInHour: number = 60;
export const step: number = 340; // Length every hour
export const hourDistance = step + minutesInHour; // The distance between the every hour
export const minuteDistance = hourDistance / minutesInHour; // The distance between the every minute
export const hourDivWidth: number = 90;
export const rightPanelWidth = 300;
export const modalAnimationDuration = 300;
