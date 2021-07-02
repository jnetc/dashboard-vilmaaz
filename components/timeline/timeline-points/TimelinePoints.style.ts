import styled from 'styled-components';

interface TimelinePointsType {
  position: number;
  w?: number;
}
export const TimelinePointsStyle = styled.div<TimelinePointsType>`
  width: ${({ w }) => w}px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate3d(${({ position }) => position}px, 0, 0);
  color: ${({ theme }) => theme.grey_light()};
  border-radius: ${({ theme }) => theme.border_radius};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: ${({ theme }) => theme.bg_black(0.7)};
  transition: all 0.3s ease-in-out;
  user-select: none;
  z-index: 0;
  &::after {
    content: '';
    width: 2px;
    height: 1000vh;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.grey_dark(0.5)};
    pointer-events: none;
    z-index: -1;
  }
`;
