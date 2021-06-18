import { FC } from 'react';
// Types
import { LessonsType, Order } from '@types';
// Store
// import { useMainStore } from '@Store/MainStore';
// Components
// import { LessonProgressBar } from './LessonProgressBar';
// import { LessonCommonProgress } from './LessonCommonProgress';
import { LessonSwitcher } from './LessonSwitcher';
// import { Break } from './Break';
// Styles
import { LessonsStyle } from '@styles/lessons';
// import { FinishedLesson } from './FinishedLesson';

const Lessons: FC<{ data: LessonsType; order: Order | undefined }> = ({
  data,
  order,
}) => {
  // const { setDetailLesson } = useMainStore();

  const lengthLessons = data.end.position - data.start.position;

  // const openDetail = () => {
  //   setDetailLesson({ open: true, data: data });
  //   document.querySelector('body')?.classList.add('right-side');
  //   document.querySelector('main')?.classList.add('opacity');
  // };

  const lessons = data.timetable.map(l => {
    // console.log(l);
    // if (l.lesson === 'taukko')
    //   return <Break key={l.id} data={l} colors={data.colors} />;
    return <LessonSwitcher key={l.id} data={l} colors={data.colors} />;
  });

  return (
    <LessonsStyle
      position={data.start.position}
      distance={lengthLessons}
      primary={data.colors.accent}
      order={order?.order}
      className="timefield-lesson">
      {/* lessons */}
      {lessons}

      {/* <LessonProgressBar data={data} />
      <LessonCommonProgress length={lengthLessons} shade={data.colors.shade} /> */}
    </LessonsStyle>
  );
};

export default Lessons;
