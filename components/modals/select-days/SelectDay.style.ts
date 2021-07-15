import styled from 'styled-components';

export const SelectDayInputStyle = styled.input`
  opacity: 0;
  position: absolute;
  &:focus + label {
    border-color: ${({ theme }) => theme.white()};
  }
  &:checked + label {
    border-color: ${({ theme }) => theme.grey_light()};
    background: ${({ theme }) => theme.white_soft(0.15)};
  }
  &:checked + label::before {
    border-color: ${({ theme }) => theme.white_soft()};
  }
  &:checked + label::after {
    transform: translateY(-50%) scale(0.5);
    opacity: 1;
  }
`;

export const SelectDayLabelStyle = styled.label`
  width: 100%;
  display: flex;
  padding: 16px 50px;
  position: relative;
  color: ${({ theme }) => theme.white_hard()};
  font-size: ${({ theme }) => theme.fontsize_24};
  font-weight: bold;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.grey_dark()};
  background: transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &::before {
    content: '';
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.grey_dark()};
    transition: all 0.3s ease-in-out;
  }
  &::after {
    content: '';
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    left: 20px;
    opacity: 0;
    transform: translateY(-50%) scale(0);
    border-radius: 50%;
    background: ${({ theme }) => theme.white_soft()};
    transition: all 0.5s cubic-bezier(0, 2, 0.5, 0.9);
  }
`;
