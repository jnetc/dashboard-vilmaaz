import { FC } from 'react';
// Component
import Lessons from '@Lessons/Lessons';
// Hook
import { useGlobalStore, useMainStore } from '@Hooks/useStores';

// Styles
import { TimeFieldStyle } from './TimeField.style';

export const TimeField: FC = () => {
  const { content } = useGlobalStore();
  const { profileLine } = useMainStore();
  // const [orders, setOrders] = useState<Array<Order>>([
  //   { id: '', name: '', order: 0 },
  // ]);

  // useEffect(() => {
  //   const isOrders = window.localStorage.getItem('orders');

  //   if (isOrders) return setOrders(JSON.parse(isOrders));
  // }, [updateOrders, dayOfWeek]);

  const lessons = content.map(data => {
    if (profileLine.id === data.id) {
      console.log(profileLine);

      return (
        <Lessons key={data.id} data={data} lineColor={profileLine.color} />
      );
    }
    return <Lessons key={data.id} data={data} />;
  });

  return <TimeFieldStyle id="time-field">{lessons}</TimeFieldStyle>;
};
