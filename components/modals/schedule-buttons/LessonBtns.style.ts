import styled from 'styled-components';

export const LessonBtnsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontsize_18};
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  user-select: none;
  cursor: pointer;
`;

export const LessonAdd = styled(LessonBtnsStyle)`
  border: 2px solid ${({ theme }) => theme.grey_light()};
  color: ${({ theme }) => theme.grey_light()};
  &:hover {
    border: 2px solid ${({ theme }) => theme.white_soft()};
    color: ${({ theme }) => theme.white_soft()};
  }
`;
export const ClearAllLessons = styled(LessonBtnsStyle)``;
