import { FC, useEffect, useState } from 'react';
// Component
import Lesson from '@Main/lessons/Lesson';
// Store
import { useMainStore } from '@Store/MainStore';
// Utils
import { getLessonStartEndPoint } from '@Main/lessons/utils/timeline';
// Types
import { LessonsType, Order } from '@types';
// Styles
import { TimefieldStyle } from './styles/lessons';

const Timefield: FC = () => {
  const { content, updateOrders } = useMainStore();
  const [startEndLesson, setStartEndLesson] = useState<Array<LessonsType>>([]);
  const [orders, setOrders] = useState<Array<Order>>([
    { id: '', name: '', order: 0 },
  ]);

  useEffect(() => {
    setStartEndLesson(content);
    const isOrders = window.localStorage.getItem('orders');

    if (isOrders) return setOrders(JSON.parse(isOrders));
  }, [updateOrders]);

  const lessonData = getLessonStartEndPoint(startEndLesson);

  const lessons = lessonData.map(data => {
    const currentLessonOrder = orders.find(o => o.id === data.id);
    return <Lesson key={data.id} data={data} order={currentLessonOrder} />;
  });

  const updateOrdersCount = () => {
    console.log('update!!!');
  };

  return (
    <TimefieldStyle id="timefield">
      <div id="field" onTransitionEnd={updateOrdersCount}>
        {lessons}
      </div>
    </TimefieldStyle>
  );
};

export default Timefield;
