import { FC } from 'react';
import { Avatar } from '@types';
// Styles
import { LessonAvatarProgressStyle } from '@styles/lessons';

export const LessonAvatarProgress: FC<{ avatar: Avatar }> = ({ avatar }) => {
  return <LessonAvatarProgressStyle>{avatar.name}</LessonAvatarProgressStyle>;
};
