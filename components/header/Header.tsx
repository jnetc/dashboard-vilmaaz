import { HeaderStyle } from '@styles/header';
// Component
import { Today } from './Today';
import { DaysOfWeek } from './DaysOfWeek';

const Header = () => {
  return (
    <HeaderStyle>
      <Today />
      <DaysOfWeek />
    </HeaderStyle>
  );
};

export default Header;
