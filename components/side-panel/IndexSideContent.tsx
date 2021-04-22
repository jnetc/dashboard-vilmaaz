import { FC } from 'react';
import styled from 'styled-components';

const SidePanelTitleStyle = styled.h2`
  margin-bottom: 50px;
`;

export const IndexSideContent: FC = () => {
  return (
    <>
      <SidePanelTitleStyle>Nykyiset oppitunit</SidePanelTitleStyle>
    </>
  );
};
