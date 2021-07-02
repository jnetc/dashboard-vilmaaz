import styled from 'styled-components';

type LessonStyleType = {
  distance: number;
  primary: string;
  position: number;
  order?: number;
};

// LESSONS
export const LessonsStyle = styled.div<LessonStyleType>`
  width: ${({ distance }) => distance}px;
  display: flex;
  align-items: center;
  position: relative;
  /* 2px same, like line width hours component */
  left: calc(${({ position }) => position}px - 2px);
  user-select: none;
  cursor: default;
  isolation: isolate;
  z-index: 10;
  order: ${({ order }) => (order ? order : 0)};
`;

export const EmptyLessonsStyle = styled.div`
  width: 100%;
  height: 80px;
`;
