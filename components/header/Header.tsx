import { HeaderStyle } from '@styles/header';
// Hook
import { useStore } from '@Hooks/useStore';
// Component
import { Today } from './Today';
import { DaysOfWeek } from './DaysOfWeek';

const Header = () => {
  const { content } = useStore();

  return (
    <HeaderStyle>
      <Today />
      <DaysOfWeek />
    </HeaderStyle>
  );
};

export default Header;
