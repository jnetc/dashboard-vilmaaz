import { useState, useEffect, useRef, FC } from 'react';
// Types
import { Element } from '@types';
// Styles
import { CountStyle } from './styles/navigation';

export const Counter: FC = () => {
  const [count, setCount] = useState<number>(80);
  const element = useRef<Element>(null);

  useEffect(() => {
    if (count >= 99) {
      return;
    }
    // Init node element
    const node = element.current;

    let tick = setInterval(() => {
      setCount(count + 1);
      // Add notice class when count change
      node?.classList.add('notice');
      // Then clean class
      setTimeout(() => {
        node?.classList.remove('notice');
      }, 1000);
    }, 5000);

    // Clean time interval
    setTimeout(() => {
      clearInterval(tick);
    }, 5000);

    return () => {
      clearInterval(tick);
    };
  }, [count, element]);

  return <CountStyle ref={element}>{count}</CountStyle>;
};
