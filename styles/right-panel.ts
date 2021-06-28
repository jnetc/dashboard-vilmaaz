import styled, { keyframes } from 'styled-components';

export const RightPanelStyle = styled.aside`
  grid-column: 2;
  grid-row: 1 / -1;
  width: 300px;
  /* height: 100%; */
  display: grid;
  grid-template-rows: 195px 50px 1fr;
  padding: 0px 20px 35px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: ${({ theme }) => theme.border_radius};
  background: ${({ theme }) => theme.bg_middle()};
  box-shadow: -10px 0px 40px ${({ theme }) => theme.bg_black(0.2)},
    -10px 0px 10px ${({ theme }) => theme.bg_black(0.3)};
  z-index: 1;
  svg#logotip {
    place-self: center;
  }
  h3 {
    grid-row: 2;
    text-transform: uppercase;
    color: ${({ theme }) => theme.grey_middle()};
    font-size: ${({ theme }) => theme.fontsize_16};
    font-weight: 500;
  }
  & .profiles {
    grid-row: 3;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;

export const PanelProfileStyle = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 30px;
  grid-template-rows: 30px 25px 21px;
  padding: 10px;
  gap: 7px 15px;
  background: ${({ theme }) => theme.bg_middle()};
  border-radius: ${({ theme }) => theme.border_radius};
  box-shadow: 0 10px 20px ${({ theme }) => theme.bg_black(0.2)},
    0 5px 5px ${({ theme }) => theme.bg_black(0.3)};
  transition: background 0.3s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.bg_soft()};
  }
  figure {
    grid-column: 1;
    grid-row: 1 /-1;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg_light()};
    user-select: none;
  }
  h4 {
    grid-column: 2;
    grid-row: 1;
    align-self: flex-end;
    font-size: ${({ theme }) => theme.fontsize_18};
  }
  p.amount {
    grid-column: 2;
    grid-row: 3;
    align-self: flex-start;
    color: ${({ theme }) => theme.grey_light()};
    font-size: ${({ theme }) => theme.fontsize_13};
    b {
      padding-left: 5px;
      color: ${({ theme }) => theme.white()};
    }
  }
  button {
    grid-column: 3;
    grid-row: 1 /-1;
    width: 30px;
    height: 40px;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.grey_light()};
    font-size: 1rem;
    position: relative;
    cursor: pointer;
    &::before {
      content: '•';
      position: absolute;
      top: 0px;
      left: 12px;
      color: ${({ theme }) => theme.grey_light()};
    }
    &::after {
      content: '•';
      position: absolute;
      bottom: 0px;
      left: 12px;
      color: ${({ theme }) => theme.grey_light()};
    }
  }
`;

const timer = keyframes`

30% {opacity: 1}
60% {opacity: 0}
`;
export const PanelProfileTimeStyle = styled.p`
  grid-column: 2;
  grid-row: 2;
  align-self: flex-end;
  color: ${({ theme }) => theme.grey_light()};
  font-size: ${({ theme }) => theme.fontsize_13};
  time {
    padding-left: 5px;
    font-weight: bold;
    color: ${({ theme }) => theme.white()};
    b {
      opacity: 0;
      padding: 0 0.8px;
      animation: ${timer} 1s linear infinite;
    }
  }
`;
