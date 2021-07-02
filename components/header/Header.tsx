import { HeaderStyle } from './Header.style';
// Component
import { DateToday } from '@Header/date-today/DateToday';
import { DaysOfWeek } from '@Header/days-of-week/DaysOfWeek';

const Header = () => {
  return (
    <HeaderStyle>
      <DateToday />
      <DaysOfWeek />
    </HeaderStyle>
  );
};

export default Header;
