import { FC, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
// Component
import { DraggableElement } from '@Main/lessons/left-side-panel/DraggebleElement';
// Store
import { useMainStore } from '@Store/MainStore';

const DraggableAreaStyle = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 70px 0;
  gap: 4rem;
`;

console.log(DraggableAreaStyle.toString());

export const DraggableArea: FC = () => {
  const { content } = useMainStore();
  const [order, setOrder] = useState([{ id: '', order: 0 }]);
  const dropareaEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOrders = window.localStorage.getItem('orders');

    const droparea = dropareaEl.current;
    if (!droparea) return;

    const getNextElement = (
      cursorPosition: number,
      currentElement: HTMLDivElement
    ) => {
      const currentElCoord = currentElement.getBoundingClientRect();
      const currentElCentr = currentElCoord.y + currentElCoord.height / 2;

      const nextEl =
        cursorPosition < currentElCentr
          ? currentElement
          : currentElement.nextElementSibling;
      return nextEl;
    };

    const dragStart = (ev: MouseEvent) => {
      const element = ev.target as HTMLDivElement;
      element.classList.add('select');

      // console.log('START drag');
    };

    const dragOver = (ev: MouseEvent) => {
      ev.preventDefault();
      // console.log(ev.target);

      // Находим выбранный элемент
      const activeEl = droparea.querySelector('.select') as HTMLDivElement;
      // Целевой элемент
      const currentEl = ev.target as HTMLDivElement;

      const isMoveable =
        activeEl !== currentEl && currentEl.classList.contains('order-lesson');

      if (!isMoveable) {
        return;
      }

      const nextEl = getNextElement(ev.clientY, currentEl);
      if (
        (nextEl && activeEl === nextEl.previousElementSibling) ||
        activeEl === nextEl
      ) {
        return;
      }
      droparea.insertBefore(activeEl, nextEl);
    };

    const dragEnd = (ev: MouseEvent) => {
      const element = ev.target as HTMLDivElement;
      element.classList.remove('select');
      element.removeAttribute('draggable');

      // console.log('END drag');
    };

    const drop = (ev: MouseEvent) => {
      ev.stopPropagation();
      ev.stopImmediatePropagation();
      // console.log('_DROP_');
    };

    droparea.addEventListener('dragstart', dragStart);
    droparea.addEventListener('dragover', dragOver);
    droparea.addEventListener('dragend', dragEnd);
    droparea.addEventListener('drop', drop);

    if (!checkOrders) {
      const ordersArr = content.map((l, idx) => {
        return { id: l.id, order: idx + 1 };
      });
      console.log(ordersArr);
      setOrder(ordersArr);
    }
  }, []);

  const elements = order.map(el => {
    return <DraggableElement key={el.id} data={el} />;
  });
  return <DraggableAreaStyle ref={dropareaEl}>{elements}</DraggableAreaStyle>;
};
