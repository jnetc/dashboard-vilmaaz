import { FC } from 'react';
// Types
import { LessonDataProps } from '@types';
// Store
import { useMainStore } from '@Store/MainStore';
// Components
import { LessonProgressBar } from '@Main/lessons/LessonProgressBar';
import { LessonCommonProgress } from '@Main/lessons/LessonCommonProgress';
// Styles
import { LessonStyle } from './styles/lessons';

const Lesson: FC<{ data: LessonDataProps }> = ({ data }) => {
  const { setDetailLesson } = useMainStore();

  const lengthLessons = data.end - data.start;

  const openDetail = () => {
    setDetailLesson({ open: true, data: data });
    document.querySelector('body')?.classList.add('right-side');
    document.querySelector('main')?.classList.add('opacity');
  };

  return (
    <LessonStyle
      position={data.start}
      distance={lengthLessons}
      primary={data.colors.accent}
      className="timefield-lesson"
      onClick={openDetail}>
      <LessonProgressBar data={data} />
      <LessonCommonProgress length={lengthLessons} shade={data.colors.shade} />
    </LessonStyle>
  );
};

export default Lesson;
