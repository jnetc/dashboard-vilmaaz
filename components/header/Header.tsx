import styled from 'styled-components';

import { DayOfWeek } from './DayOfWeek';
import { Logout } from './Logout';

const HeaderStyle = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <DayOfWeek />
      <Logout />
    </HeaderStyle>
  );
};

export default Header;
