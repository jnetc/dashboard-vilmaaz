import { FC, useEffect } from 'react';
import { NotyficationStyle } from './Notification.style';
//Hook
import { useGlobalStore } from '@Hooks/useStores';

const Notification: FC = () => {
  const { updateStore, setUpdateStore } = useGlobalStore();
  const duration = 5000;

  useEffect(() => {
    if (updateStore.status === 'default') return;

    const timer = setTimeout(() => {
      setUpdateStore(prevState => {
        prevState = { status: 'default' };
        return prevState;
      });
      clearTimeout(timer);
    }, duration);

    return () => clearTimeout(timer);
  }, [updateStore.message]);

  return (
    <NotyficationStyle
      options={{ status: updateStore.status, duration: duration }}>
      {updateStore.message}
    </NotyficationStyle>
  );
};
export default Notification;
