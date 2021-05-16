import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const CtrlButtonStyle = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.bg_light()};
  cursor: pointer;
`;
type Props = {
  children?: ReactNode;
  onClick: () => void;
};

const CtrlButton: FC<Props> = props => {
  return <CtrlButtonStyle onClick={props.onClick}></CtrlButtonStyle>;
};

export default CtrlButton;
