import styled, { keyframes } from 'styled-components';
import { LessonStyle } from '@Lessons/Lesson.style';

const sleepAnimation = keyframes`
  0% {transform: translate(-30%, -80%) scale(0.4) rotate(-25deg);  opacity: 0}
  20% {transform: translate(-30%, -80%) scale(0.4) rotate(-25deg);  opacity: 0}
  50% {transform: translate(50%, -150%) scale(0.6) rotate(10deg); opacity: 1}
  80% {transform: translate(100%, -190%) scale(.4) rotate(35deg);opacity: 0}
  80.1% {transform: translate(-30%, -80%) scale(.4) rotate(-25deg);opacity: 0}
  100% {transform: translate(-30%, -80%) scale(.4) rotate(-25deg);opacity: 0}
`;

export const PendingLessonStyle = styled(LessonStyle)`
  & .lesson-duration {
    stroke: ${({ theme }) => theme.grey_middle(0.5)};
  }
  & .lesson-status {
    .pending-icon-animation {
      animation: ${sleepAnimation} 3s linear infinite;
    }
  }
`;
