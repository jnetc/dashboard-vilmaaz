import { FC } from 'react';
import styled from 'styled-components';

const AsideStyle = styled.aside`
  grid-column: 2 / 3;
  width: 300px;
  height: 100%;
  padding: 20px 30px;
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: auto;
  border-radius: 30px 0 0 30px;
  background-color: ${({ theme }) => theme.bg_regular};
  box-shadow: 0px 40px 40px ${props => props.theme.shadow(0.2)},
    0px 10px 10px ${props => props.theme.shadow(0.3)};
  z-index: 100;
`;

export const Aside: FC = ({ children }) => {
  return <AsideStyle>{children}</AsideStyle>;
};
