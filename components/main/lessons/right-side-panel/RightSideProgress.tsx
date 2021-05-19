import { FC, useEffect } from 'react';
import styled from 'styled-components';

const RightSideProgressStyle = styled.div`
  margin-bottom: 50px;
`;

const RightSideHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const RightSideProgress: FC = () => {
  useEffect(() => {});

  return (
    <RightSideProgressStyle className="perespective"></RightSideProgressStyle>
  );
};
