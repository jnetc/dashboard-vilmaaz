import styled from 'styled-components';

export const DayOfWeekStyle = styled.button`
  width: 60px;
  height: 40px;
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
    background: ${({ theme }) => theme.white_soft()};
    box-shadow: 0 4px 10px ${({ theme }) => theme.white_soft(0.6)},
      0 10px 15px ${({ theme }) => theme.white_soft(0.4)};
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
    background: ${({ theme }) => theme.white_soft()};
    transition: all 0.3s ease-in-out;
    transform: scale(0);
  }
  &.active,
  &:hover {
    color: ${({ theme }) => theme.white_soft()};
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
