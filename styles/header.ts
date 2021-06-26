import styled from 'styled-components';

export const HeaderStyle = styled.header`
  grid-column: 1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  align-items: center;
  padding: 0 35px;
`;

// DayOfWeek
export const TodayStyle = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  #day_of_week {
    font-size: ${props => props.theme.fontsize_16};
    font-weight: 400;
  }
  #current_date {
    font-size: ${props => props.theme.fontsize_14};
    color: ${props => props.theme.grey_light()};
    padding-top: 5px;
  }
`;

export const DaysOfWeekStyle = styled.div`
  grid-column: 2;
  display: flex;
  column-gap: 15px;
  margin: auto;
`;

export const DayOfWeekStyle = styled.button`
  width: 60px;
  height: 40px;
  border: 2px solid transparent;
  background: none;
  position: relative;
  color: ${({ theme }) => theme.grey_middle()};
  font-size: ${({ theme }) => theme.fontsize_16};
  font-weight: 500;
  transform: scale(0.8);
  transform-origin: bottom center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &::after {
    content: '';
    width: 40px;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 50%;
    opacity: 0;
    border-radius: 10px;
    background: ${({ theme }) => theme.white()};
    box-shadow: 0 4px 10px ${({ theme }) => theme.white(0.6)},
      0 10px 15px ${({ theme }) => theme.white(0.4)};
    transform: translate(-50%, -10px) scale(0.5);
    transition: all 0.3s ease-in-out;
  }
  &::before {
    content: '';
    width: 5px;
    height: 5px;
    position: absolute;
    top: 5px;
    right: 10px;
    opacity: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.white()};
    transition: all 0.3s ease-in-out;
    transform: scale(0);
  }
  &.active,
  &:hover {
    color: ${({ theme }) => theme.white()};
    transform: scale(1);
    &::after {
      opacity: 1;
      transform: translate(-50%, 0px) scale(1);
    }
    &.current {
      &::before {
        transform: scale(0);
      }
    }
  }
  &.current {
    &::before {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
