import { FC } from 'react';
import styled from 'styled-components';

const ProgressTimeStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
  time {
    color: ${({ theme }) => theme.white()};
    font-size: ${({ theme }) => theme.fontsize_48};
    font-weight: bold;
    transition: all 0.3s ease-in-out;
  }
  span {
    color: ${({ theme }) => theme.grey_light()};
  }
`;

export const ProgressTime: FC<{ time: string }> = ({ time }) => {
  return (
    <ProgressTimeStyle>
      <time>{time}</time>
      <span>oppimisaika</span>
    </ProgressTimeStyle>
  );
};
