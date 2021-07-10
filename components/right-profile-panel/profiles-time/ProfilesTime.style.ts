import styled, { keyframes } from 'styled-components';

const timer = keyframes`
  30% {opacity: 1}
  60% {opacity: 0}
`;
export const ProfilesTimeStyle = styled.p`
  grid-column: 2;
  grid-row: 2;
  align-self: flex-end;
  color: ${({ theme }) => theme.grey_light()};
  font-size: ${({ theme }) => theme.fontsize_13};
  time {
    padding-left: 5px;
    font-weight: bold;
    color: ${({ theme }) => theme.white_soft()};
    b {
      opacity: 0;
      padding: 0 0.8px;
      animation: ${timer} 1s linear infinite;
    }
  }
`;
