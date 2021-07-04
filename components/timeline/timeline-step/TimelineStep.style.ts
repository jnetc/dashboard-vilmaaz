import styled from 'styled-components';
import { TimelinePointsStyle } from '@Timeline/timeline-points/TimelinePoints.style';

export const TimelineStepStyle = styled(TimelinePointsStyle)`
  color: ${({ theme }) => theme.white()};
  background-color: ${({ theme }) => theme.bg_middle(0.5)};
  backdrop-filter: blur(2px);
  box-shadow: 0 5px 5px ${({ theme }) => theme.bg_black(0.15)},
    0 20px 20px ${({ theme }) => theme.bg_black(0.1)};
  transform: translate3d(${({ position }) => position}px, 0, 0);
  transition: transform 0.3s ease-in-out;
  pointer-events: none;
  z-index: 1;
  &::after {
    background-color: ${({ theme }) => theme.grey_dark()};
  }
`;
