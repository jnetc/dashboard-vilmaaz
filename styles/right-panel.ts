import styled from 'styled-components';

export const RightPanelStyle = styled.aside`
  width: 300px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  padding: 35px 30px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.bg_middle()};
  box-shadow: -10px 0px 40px ${({ theme }) => theme.bg_dark(0.2)},
    -10px 0px 10px ${({ theme }) => theme.bg_dark(0.3)};
  z-index: 1;
  h3 {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontsize_16};
  }
  & .profiles {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 30px;
  }
`;

export const PanelProfileStyle = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 30px;
  grid-template-rows: repeat(2, 30px);
  align-items: center;
  column-gap: 15px;
  row-gap: 5px;
  background: ${({ theme }) => theme.bg_middle()};
  /* border: 1px solid red; */
  figure {
    grid-column: 1;
    grid-row: 1 /-1;
    justify-self: center;
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
  }
  span {
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

export const PanelProfileTimeStyle = styled.span`
  grid-column: 2;
  grid-row: 2;
  align-self: flex-start;
  color: ${({ theme }) => theme.grey_light()};
  font-size: ${({ theme }) => theme.fontsize_14};
  time {
    padding-left: 5px;
    font-weight: bold;
  }
`;
