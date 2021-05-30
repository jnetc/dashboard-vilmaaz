import { FC } from 'react';
import { ProgressTimeStyle } from './styles/right-panel-styles';

export const ProgressTime: FC<{ time: string }> = ({ time }) => {
  return (
    <ProgressTimeStyle>
      <time>{time}</time>
      <span>oppimisaika</span>
    </ProgressTimeStyle>
  );
};
