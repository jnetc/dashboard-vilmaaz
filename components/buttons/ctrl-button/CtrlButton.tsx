import styled from 'styled-components';

const CtrlButtonStyle = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.bg_light};
  cursor: pointer;
`;

const CtrlButton = () => {
  return <CtrlButtonStyle></CtrlButtonStyle>;
};

export default CtrlButton;
