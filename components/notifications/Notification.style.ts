import styled, { css, keyframes } from 'styled-components';

interface Props {
  status: 'default' | 'success' | 'error';
  duration: number;
}

const translateLayer = keyframes`
  0% {transform: translate(-50%, 0)};
  5% {transform: translate(-50%, 40px)};
  95% {transform: translate(-50%, 40px)};
  100% {transform: translate(-50%, 0)};
`;

const defaultStyle = css`
  opacity: 0;
  background: none;
`;
const successStyle = (time: number) => css`
  opacity: 1;
  color: ${({ theme }) => theme.bg_dark()};
  background: ${({ theme }) => theme.primary()};
  animation: ${translateLayer} ${time}ms ease-in forwards;
  box-shadow: 0 5px 5px ${({ theme }) => theme.primary(0.2)},
    0 10px 10px ${({ theme }) => theme.primary(0.15)};
`;
const errorStyle = (time: number) => css`
  opacity: 1;
  background: ${({ theme }) => theme.danger()};
  animation: ${translateLayer} ${time}ms ease-in forwards;
  box-shadow: 0 5px 5px ${({ theme }) => theme.danger(0.2)},
    0 10px 10px ${({ theme }) => theme.danger(0.15)};
`;

export const NotyficationStyle = styled.div<{ options: Props }>`
  position: fixed;
  top: -35px;
  left: 50%;
  padding: 10px 30px;
  border-radius: 8px;
  background: white;
  font-weight: bold;
  z-index: 1001;
  ${({ options }) => options.status === 'default' && defaultStyle};
  ${({ options }) =>
    options.status === 'success' && successStyle(options.duration)};
  ${({ options }) =>
    options.status === 'error' && errorStyle(options.duration)};
`;
