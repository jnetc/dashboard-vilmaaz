import styled from 'styled-components';
import { LessonStyle } from '@Lessons/Lesson.style';

export const FinishedLessonStyle = styled(LessonStyle)`
  & .lesson-duration {
    stroke: ${({ theme }) => theme.grey_middle(0.5)};
  }
  & .lesson-name {
  }
  & .finished-icon {
    /* stroke-dasharray: 30;
    stroke-dashoffset: 90; */
    stroke-dasharray: 40;
    stroke-dashoffset: 90;
    transition: all 0.5s ease-in-out;
  }
`;
