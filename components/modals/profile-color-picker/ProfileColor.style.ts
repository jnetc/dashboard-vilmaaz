import styled from 'styled-components';

export const ProfileColorInputStyle = styled.input`
  opacity: 0;
  position: absolute;
  &:focus + label {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.white()};
  }
  &:checked + label::after {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 1;
  }
`;

export const ProfileColorLabelStyle = styled.label<{ setColor: string }>`
  width: 24px;
  height: 24px;
  display: flex;
  margin: auto 0;
  position: relative;
  border-radius: 50%;
  border: 3px solid var(--${({ setColor }) => setColor});
  background: ${({ theme }) => theme.bg_black()};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &::after {
    content: '';
    width: inherit;
    height: inherit;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    background: var(--${({ setColor }) => setColor});
    transition: all 0.5s cubic-bezier(0, 2, 0.5, 0.9);
  }
  &[for='brown'] {
    margin-left: 10px;
  }
  p {
    position: relative;
    top: 1px;
    left: 0;
    padding-left: 28px;
    color: var(--${({ setColor }) => setColor});
    font-size: ${({ theme }) => theme.fontsize_14};
  }
`;
