import React from 'react';
import styled from 'styled-components';

const SidePanelStyle = styled.section`
  grid-column: 2;
  height: 100%;
  padding: 90px 0 0 30px;
  position: relative;
  border-radius: 30px 0 0 30px;
  background-color: ${({ theme }) => theme.bg_regular};
  box-shadow: 0px 40px 40px rgba(${props => props.theme.shadow}, 0.2),
    0px 10px 10px rgba(${props => props.theme.shadow}, 0.3);
  z-index: 100;
`;

export const SidePanel = ({ children }: { children: React.ReactNode }) => {
  return <SidePanelStyle>{children}</SidePanelStyle>;
};
