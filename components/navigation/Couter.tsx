import { useState, useEffect, useRef, FC } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation (flash effect)
const impulse = (color: string) => keyframes`
  0% {box-shadow: 0 0 0 0px rgba(${color}, 1)}
  100%{box-shadow: 0 0 0 10px rgba(${color}, 0)}
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
  color: ${props => props.theme.bg_main};
  font-size: ${props => props.theme.fontsize_14};
  font-weight: bold;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.bg_main};
  background-color: ${props => props.theme.primary};

  & .counter {
    /* position: absolute;
    top: 10px; */
    letter-spacing: 0px;
  }

  &.notice {
    animation: ${props => impulse(props.theme.shadow_primary)} 1s ease-in-out
      forwards;
  }
`;

export const Counter: FC = () => {
  const [count, setCount] = useState<number>(80);
  const element = useRef<HTMLDivElement | null>(null);

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
  }, [count, element]);

  return (
    <CountStyle ref={element}>
      <div className="counter">
        {/* {count === 99 && '<'} */}
        {count}
      </div>
    </CountStyle>
  );
};
