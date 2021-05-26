import { FC, ReactNode } from 'react';
import styled from 'styled-components';

export const CtrlButtonStyle = styled.button<{ gridpos: Grid | undefined }>`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.bg_light()};
    /* background-color: ${({ theme }) => theme.bg_light(0.7)}; */
  }
  grid-row: ${({ gridpos }) => (gridpos ? gridpos.row : '')};
  justify-self: ${({ gridpos }) => (gridpos ? gridpos.justify : '')};
  align-self: ${({ gridpos }) => (gridpos ? gridpos.align : '')};
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

type Grid = {
  row: number;
  justify?: 'center' | 'flex-start' | 'flex-end';
  align?: 'center' | 'flex-start' | 'flex-end';
};

type Props = {
  children?: ReactNode;
  onClick?: () => void;
  gridpos?: Grid;
};

const CtrlButton: FC<Props> = props => {
  return (
    <CtrlButtonStyle onClick={props.onClick} gridpos={props.gridpos}>
      {props.children}
    </CtrlButtonStyle>
  );
};

export default CtrlButton;
