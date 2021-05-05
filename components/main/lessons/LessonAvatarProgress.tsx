import { FC } from 'react';
import { Avatar } from '@types';

export const LessonAvatarProgress: FC<{ avatar: Avatar }> = ({ avatar }) => {
  return <div className="progress-avatar">{avatar.name}</div>;
};
