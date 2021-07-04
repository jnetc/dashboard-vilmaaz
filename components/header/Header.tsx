import { HeaderStyle, SwitcherWrapper } from './Header.style';
// Component
import { DateToday } from '@Header/date-today/DateToday';
import { DaysOfWeek } from '@Header/days-of-week/DaysOfWeek';
import { Switcher } from '@Header/switcher/Switcher';

const Header = () => {
  return (
    <HeaderStyle>
      <DateToday />
      <DaysOfWeek />
      <SwitcherWrapper>
        auto liike
        <Switcher />
      </SwitcherWrapper>
    </HeaderStyle>
  );
};

export default Header;
