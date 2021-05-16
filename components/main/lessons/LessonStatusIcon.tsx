import { FC } from 'react';
import { Done, Wait } from '../../icons/Lesson';
import styled from 'styled-components';

import { AvatarAndIconCommonStyle } from '@Main/lessons/LessonAvatarProgress';
const LessonStatusIconStyle = styled(AvatarAndIconCommonStyle)`
  font-size: ${({ theme }) => theme.fontsize_16};
  right: 7px;
  box-shadow: 0px 40px 40px ${props => props.theme.bg_dark(0.2)},
    0px 10px 10px ${props => props.theme.bg_dark(0.3)};
  z-index: 3;
`;

export const LessonStatusIcon: FC<{
  status: string;
  timer: number | undefined;
}> = ({ status, timer }) => {
  switch (status) {
    case 'done':
      return (
        <LessonStatusIconStyle>
          <Done />
        </LessonStatusIconStyle>
      );
    case 'time':
      return timer ? (
        <LessonStatusIconStyle>{timer}m</LessonStatusIconStyle>
      ) : (
        <></>
      );
    case 'wait':
      return (
        <LessonStatusIconStyle>
          <Wait />
        </LessonStatusIconStyle>
      );
    default:
      return <LessonStatusIconStyle>!</LessonStatusIconStyle>;
  }
};
