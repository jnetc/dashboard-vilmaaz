import { FC } from 'react';
import styled from 'styled-components';

import { DayOfWeek } from './DayOfWeek';
import { Logout } from './Logout';

const HeaderStyle = styled.header`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
`;

const Header: FC = () => {
  return (
    <HeaderStyle>
      <DayOfWeek />
      <Logout />
    </HeaderStyle>
  );
};

export default Header;
