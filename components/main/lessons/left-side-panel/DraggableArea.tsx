import { FC, useEffect, useState, DragEvent, MouseEvent } from 'react';
// Store
import { useMainStore } from '@Store/MainStore';
//Types
import { Order } from '@types';
// Styles
import {
  DraggableAreaStyle,
  DraggableElementStyle,
} from './styles/left-panel-styles';

// console.log(DraggableAreaStyle.toString());

export const DraggableArea: FC = () => {
  const { content } = useMainStore();
  const [orders, setOrders] = useState<Array<Order>>([
    { id: '', name: '', order: 0 },
  ]);
  const [order, setOrder] = useState<Order>({ id: '', name: '', order: 0 });

  useEffect(() => {
    // const checkOrders = window.localStorage.getItem('orders');
    const orderArray: Array<Order> = [];

    for (const i in content) {
      orderArray.push({
        id: content[i].id,
        name: content[i].name,
        order: Number(i) + 1,
      });
    }

    setOrders(orderArray);
  }, []);

  useEffect(() => {}, [orders]);

  //* START
  const dragStart = (el: Order): void => {
    setOrder(el);
  };

  //* MOVE
  const dragOver = (ev: DragEvent<HTMLDivElement>): void => {
    ev.preventDefault();
  };

  //* ENTER
  const dragEnter = (ev: DragEvent<HTMLDivElement>, el: Order): void => {
    if (el.id === order.id) return;

    ev.preventDefault();
    const element = ev.target as HTMLDivElement;
    element.classList.add('hovered');
  };

  //* LEAVE
  const dragLeave = (ev: DragEvent<HTMLDivElement>): void => {
    ev.preventDefault();
    const element = ev.target as HTMLDivElement;
    element.classList.remove('hovered');
  };

  //* END
  const dragEnd = (ev: DragEvent<HTMLDivElement>): void => {
    ev.preventDefault();
    const element = ev.target as HTMLDivElement;
    element.classList.remove('hovered');
    element.removeAttribute('draggable');
  };

  //* DROP
  const dragDrop = (ev: DragEvent<HTMLDivElement>, el: Order): void => {
    ev.preventDefault();

    const element = ev.target as HTMLDivElement;
    element.classList.remove('hovered');

    if (el.id === order.id) {
      console.log("Don't update");
      return;
    }

    const targetOrder = el.order;
    el.order = order.order;
    order.order = targetOrder;

    const arr = orders.sort(sortOrders).map((l, idx) => {
      if (l.id === el.id) return el;
      l.order = idx + 1;
      return l;
    });

    setOrders(arr);
  };

  const sortOrders = (a: Order, b: Order) => {
    if (a.order > b.order) return 1;
    return -1;
  };

  function mouseDown(ev: MouseEvent): void {
    const element = ev.target as HTMLDivElement;
    element.draggable = true;
  }
  function mouseUp(ev: MouseEvent): void {
    const element = ev.target as HTMLDivElement;
    element.removeAttribute('draggable');
  }

  return (
    <DraggableAreaStyle>
      {orders.map(el => {
        return (
          <DraggableElementStyle
            onMouseDown={ev => mouseDown(ev)}
            onMouseUp={ev => mouseUp(ev)}
            onDragStart={() => dragStart(el)}
            onDragOver={ev => dragOver(ev)}
            onDragEnter={ev => dragEnter(ev, el)}
            onDragLeave={ev => dragLeave(ev)}
            onDragEnd={ev => dragEnd(ev)}
            onDrop={ev => dragDrop(ev, el)}
            key={el.id}>
            {el.order} {el.name.charAt(0)}
          </DraggableElementStyle>
        );
      })}
    </DraggableAreaStyle>
  );
};
