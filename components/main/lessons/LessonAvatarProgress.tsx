import { FC } from 'react';
import styled from 'styled-components';
import { Avatar } from '@types';

export const AvatarAndIconCommonStyle = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  background-color: ${({ theme }) => theme.bg_light()};
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
`;

const LessonAvatarProgressStyle = styled(AvatarAndIconCommonStyle)`
  left: 7px;
  object-fit: cover;
  z-index: 2;
`;

export const LessonAvatarProgress: FC<{ avatar: Avatar }> = ({ avatar }) => {
  return <LessonAvatarProgressStyle>{avatar.name}</LessonAvatarProgressStyle>;
};
