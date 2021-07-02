import { FC, useEffect, useState } from 'react';
// Component
import Lessons from '@Lessons/Lessons';
// Hook
import { useGlobalStore } from '@Hooks/useStores';
// Types
import { Order } from '@Types';
// Styles
import { TimeFieldStyle } from './TimeField.style';

export const TimeField: FC = () => {
  const { content, updateOrders, dayOfWeek } = useGlobalStore();
  const [orders, setOrders] = useState<Array<Order>>([
    { id: '', name: '', order: 0 },
  ]);

  useEffect(() => {
    const isOrders = window.localStorage.getItem('orders');

    if (isOrders) return setOrders(JSON.parse(isOrders));
  }, [updateOrders, dayOfWeek]);

  const lessons = content.map(data => {
    const currentLessonOrder = orders.find(o => o.id === data.id);

    return <Lessons key={data.id} data={data} order={currentLessonOrder} />;
  });

  return <TimeFieldStyle id="time-field">{lessons}</TimeFieldStyle>;
};
