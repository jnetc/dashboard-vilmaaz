import { FC } from 'react';
import styled from 'styled-components';
// Types
import { LessonDataProps, Position, Distance } from '@types';

// Store
import { useMainStore } from '@Store/MainStore';
// Components
import { LessonProgressBar } from '@Main/lessons/LessonProgressBar';
import { LessonCommonProgress } from '@Main/lessons/LessonCommonProgress';

const LessonStyle = styled.div<Distance & { primary: string } & Position>`
  width: ${({ distance }) => distance}px;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  left: ${({ position }) => position}px;
  border-radius: 35px;
  user-select: none;
  cursor: pointer;
  z-index: 10;
  &:hover {
    .progress {
      border-color: ${({ theme }) => theme.grey_middle()};
      /* box-shadow: 0px 40px 40px ${props => props.theme.bg_dark(0.2)},
        0px 10px 10px ${props => props.theme.bg_dark(0.3)}; */
    }
    > svg {
      stroke: var(--${({ primary }) => primary});
    }
  }
`;

const Lesson: FC<{ data: LessonDataProps }> = ({ data }) => {
  const { setDetailLesson } = useMainStore();

  const lengthLessons = data.end - data.start;

  const openDetail = () => {
    setDetailLesson({
      open: true,
      data: data,
    });
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
