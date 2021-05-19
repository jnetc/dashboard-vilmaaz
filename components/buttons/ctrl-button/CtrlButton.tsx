import { FC, ReactNode, useState, useCallback, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const anim = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
`;

const CtrlButtonStyle = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.bg_light()};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.bg_light(0.7)};
  }
`;

const NoticeStyle = styled.div<{ notice: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${anim} 0.5s ease-in-out forwards;
  border: 2px solid ${({ theme }) => theme.grey_middle(0.5)};
  background-color: ${({ theme }) => theme.white(0.05)};
  z-index: 5;
`;

const ButtonStyle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  /* border: 1px solid red; */
`;
export const CloseButtonStyle = styled(ButtonStyle)`
  &::after,
  &::before {
    content: '';
    height: 0.13rem;
    width: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    background: ${({ theme }) => theme.grey_light()};
  }
  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const MenuHideBottonStyle = styled(ButtonStyle)`
  &::after,
  &::before {
    content: '';
    height: 0.13rem;
    width: 0.67rem;
    position: absolute;
    top: 50%;
    left: 0.4rem;
    background: ${({ theme }) => theme.grey_light()};
    transform-origin: 0;
  }
  &::after {
    transform: translateY(-50%) rotate(45deg);
  }
  &::before {
    transform: translateY(-50%) rotate(-45deg);
  }
`;

type Props = {
  children?: ReactNode;
  onClick?: () => void;
};

const CtrlButton: FC<Props> = props => {
  const [notice, setNotice] = useState(false);
  // const notice = () => {
  //   console.log('button click');
  // };

  console.log('onclick button???? ');

  return (
    <CtrlButtonStyle
      onClick={props.onClick}
      onMouseDown={() => setNotice(!notice)}>
      {notice && (
        <NoticeStyle
          notice={notice}
          onAnimationEnd={() => setNotice(!notice)}
        />
      )}

      {props.children}
    </CtrlButtonStyle>
  );
};

export default CtrlButton;
