import { FC } from 'react';
// Styles
import { ProgressNameStyle } from './styles/lessons';

// TODO fix overflow text position

export const LessonName: FC<{ name: string | undefined }> = ({ name }) => {
  return (
    <>
      {name && (
        <ProgressNameStyle className="progress-name">{name}</ProgressNameStyle>
      )}
    </>
  );
};
