import styled from 'styled-components';

export const AddProfileButtonStyle = styled.button`
  position: fixed;
  padding: 15px 25px;
  right: 20px;
  bottom: 20px;
  border-radius: 50px;
  color: ${({ theme }) => theme.bg_dark()};
  font-weight: bold;
  text-transform: lowercase;
  background: ${({ theme }) => theme.white_soft()};
  box-shadow: 0 5px 7px ${({ theme }) => theme.white_soft(0.2)},
    0 10px 15px ${({ theme }) => theme.white_soft(0.15)};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.white_hard()};
    box-shadow: 0 5px 7px ${({ theme }) => theme.white_hard(0.2)},
      0 10px 15px ${({ theme }) => theme.white_hard(0.15)};
  }
`;
