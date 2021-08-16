import { FC } from 'react';
// Types
import { LessonsType } from '@Types';
// Component
import { Switcher } from '@Lessons/switcher/Switcher';
// Style
import { LessonsStyle, EmptyLessonsStyle } from './Lessons.style';
// Hook
import { useGlobalStore } from '@Hooks/useStores';

const Lessons: FC<{ data: LessonsType; lineColor?: string }> = ({
  data,
  lineColor,
}) => {
  const { dayOfWeek } = useGlobalStore();
  const lengthLessons = data.end.position - data.start.position;
  const getCurrentTimetable = data.timetable.find(
    tb => tb.day === dayOfWeek && tb.lessons
  );
  const lessons = getCurrentTimetable?.lessons.map(l => {
    return <Switcher key={l.id} data={l} color={data.color} />;
  });

  return lengthLessons !== 0 ? (
    <LessonsStyle
      position={data.start.position}
      distance={lengthLessons}
      primary={data.color}
      lineColor={lineColor}
      className="timefield-lesson">
      {lessons}
    </LessonsStyle>
  ) : (
    <EmptyLessonsStyle lineColor={lineColor} className="timefield-lesson" />
  );
};

export default Lessons;
