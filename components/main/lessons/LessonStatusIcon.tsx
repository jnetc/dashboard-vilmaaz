import { FC } from 'react';
import styled from 'styled-components';
import { Done, Time, Wait } from '../../icons/Lesson';

const LessonStatusIconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bg_light};
  box-shadow: 0 10px 10px ${({ theme }) => theme.shadow(0.2)},
    0 30px 30px ${({ theme }) => theme.shadow(0.15)};
`;

export const LessonStatusIcon: FC<{ status: string }> = ({ status }) => {
  switch (status) {
    case 'done':
      return (
        <LessonStatusIconStyle className="progress-icon">
          <Done />
        </LessonStatusIconStyle>
      );
    case 'time':
      return (
        <LessonStatusIconStyle className="progress-icon">
          <Time />
        </LessonStatusIconStyle>
      );
    case 'wait':
      return (
        <LessonStatusIconStyle className="progress-icon">
          <Wait />
        </LessonStatusIconStyle>
      );
    default:
      return (
        <LessonStatusIconStyle className="progress-icon">
          !
        </LessonStatusIconStyle>
      );
  }
};
