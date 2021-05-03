import { useState, useEffect, useRef, FC } from 'react';
import styled, { keyframes } from 'styled-components';

import { Element } from './types';

// Animation (flash effect)
const impulse = (color: string) => keyframes`
  0% {box-shadow: 0 0 0 0px hsla(${color}, 1)}
  100%{box-shadow: 0 0 0 10px hsla(${color}, 0)}
`;

// Main css
const CountStyle = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15%;
  left: 55%;
  color: ${({ theme }) => theme.bg_main};
  font-size: ${({ theme }) => theme.fontsize_14};
  font-weight: bold;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.bg_main};
  background-color: ${({ theme }) => theme.primary};
  letter-spacing: 0px;
  &.notice {
    animation: ${({ theme }) => impulse(theme.shadow_primary(null))} 1s
      ease-in-out forwards;
  }
`;

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
