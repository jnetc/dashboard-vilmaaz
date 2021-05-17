import { FC, useEffect } from 'react';
import styled from 'styled-components';

const AsideProgressStyle = styled.div`
  margin-bottom: 50px;
`;

const AsideHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const AsideProgress: FC = () => {
  useEffect(() => {});

  return <AsideProgressStyle className="perespective"></AsideProgressStyle>;
};
