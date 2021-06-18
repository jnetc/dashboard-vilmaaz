import styled from 'styled-components';

// TIMEFIELD
export const TimefieldStyle = styled.div`
  grid-row: 2;
  display: flex;
  padding: 70px 0px 70px 46px;
  #field {
    display: flex;
    flex-direction: column;
    gap: 4em;
    transition: all 0.3s ease-in-out;
  }
`;

// TIMELINE
export const TimelineStyle = styled.div`
  width: 100%;
  grid-row: 1;
  position: relative;
  cursor: default;
  div#track {
    position: relative;
  }
`;

// TIMELINE POINTS
export const TimelinePointsStyle = styled.div<{ position: number }>`
  width: 90px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate3d(${({ position }) => position}px, 0, 0);
  color: ${({ theme }) => theme.grey_light()};
  border-radius: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  /* border-color: ${({ theme }) => theme.bg_dark()}; */
  background-color: ${({ theme }) => theme.bg_dark(0.7)};
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
  /* &:hover {
    background-color: ${({ theme }) => theme.bg_regular(0.8)};
    border-color: ${({ theme }) => theme.grey_light()};
    z-index: 2;
  } */
`;

// TIMELINE STEP
export const TimelineStepStyle = styled(TimelinePointsStyle)`
  position: absolute;
  transform: translate3d(${({ position }) => position}px, 0, 0);
  transition: transform 0.3s ease-in-out;
  color: ${({ theme }) => theme.white()};
  /* background-color: ${({ theme }) => theme.bg_light()}; */
  border-color: ${({ theme }) => theme.grey_dark()};
  box-shadow: 0 5px 5px ${({ theme }) => theme.bg_dark(0.15)},
    0 20px 20px ${({ theme }) => theme.bg_dark(0.1)};
  z-index: 1;
  pointer-events: none;
  &::after {
    background-color: ${({ theme }) => theme.grey_dark()};
  }
`;

// TIMETABLE
export const TimetableStyle = styled.div<{ hours: number }>`
  width: calc(${({ hours }) => hours}px + 300px);
  max-height: inherit;
  min-height: calc(100vh - 35px);
  display: grid;
  position: relative;
  grid-template-rows: 60px 1fr;
  /* padding: 0 160px 0 2px; */
  padding: 0 120px 0 2px;
  z-index: 1;
  user-select: none;
  cursor: move;
  /* @media (max-width: 1920px) {
    width: 1920px;
  } */
  &.animate {
    transition: transform 0.3s ease-in-out;
  }
`;

export const MainStyle = styled.main`
  width: 100%;
  min-height: 100%;
  padding: 35px 0 0 0px;
  position: relative;
  overflow: hidden;
  /* background-color: ${({ theme }) => theme.bg_middle()}; */
  box-shadow: 0px 40px 40px ${({ theme }) => theme.bg_dark(0.2)},
    0px 10px 10px ${({ theme }) => theme.bg_dark(0.3)};
  &.opacity {
    filter: opacity(40%);
  }
`;

export const TimetableEmptyStyle = styled.h2`
  justify-self: center;
  align-self: center;
`;

// UPDATE TIMETABLE
export const UpdateTimetableStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: ${({ theme }) => theme.bg_dark(0.5)};
  backdrop-filter: blur(2px);
  transform: translate(-50%, -50%);
  z-index: 1000;
  user-select: none;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 3rem 4rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.bg_light()};
    box-shadow: 0px 40px 40px ${({ theme }) => theme.bg_dark(0.2)},
      0px 10px 10px ${({ theme }) => theme.bg_dark(0.3)};
    z-index: 1001;
  }
  h3 {
    padding-bottom: 2rem;
  }
`;
