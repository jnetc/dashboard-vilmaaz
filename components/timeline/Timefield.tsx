import { FC, useEffect, useState } from 'react';
// Component
import Lessons from '@Lessons/Lessons';
// Hook
import { useStore } from '@Hooks/useStore';
// Types
import { Order } from '@types';
// Styles
import { TimefieldStyle } from '@styles/timeline';

const Timefield: FC = () => {
  const { content, updateOrders } = useStore();
  const [orders, setOrders] = useState<Array<Order>>([
    { id: '', name: '', order: 0 },
  ]);

  useEffect(() => {
    const isOrders = window.localStorage.getItem('orders');

    if (isOrders) return setOrders(JSON.parse(isOrders));
  }, [updateOrders]);

  const lessons = content.map(data => {
    const currentLessonOrder = orders.find(o => o.id === data.id);

    return <Lessons key={data.id} data={data} order={currentLessonOrder} />;
  });

  return (
    <TimefieldStyle id="timefield">
      <div id="field">{lessons}</div>
    </TimefieldStyle>
  );
};

export default Timefield;
