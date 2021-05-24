import { FC } from 'react';
import styled from 'styled-components';

// TODO fix overflow text position
const ProgressNameStyle = styled.div`
  width: 100%;
  padding: 0 65px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.grey_light()};
`;

export const LessonName: FC<{ name: string | undefined }> = ({ name }) => {
  return (
    <>
      {name && (
        <ProgressNameStyle className="progress-name">{name}</ProgressNameStyle>
      )}
    </>
  );
};
