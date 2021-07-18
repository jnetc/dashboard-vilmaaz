import { SwitcherStyle } from './Switcher.style';
// Hook
import { useMainStore } from '@Hooks/useStores';

export const Switcher = () => {
  const { autoMovement, setAutoMovement } = useMainStore();

  const automovement = () => setAutoMovement(!autoMovement);

  return (
    <SwitcherStyle htmlFor="switcher">
      <input
        type="checkbox"
        name="switcher"
        id="switcher"
        onChange={automovement}
        checked={autoMovement}
      />
      <div className="slider" />
      <span>on</span>
      <span>off</span>
    </SwitcherStyle>
  );
};
