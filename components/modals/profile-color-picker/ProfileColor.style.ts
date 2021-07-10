import styled from 'styled-components';

export const ProfileColorInputStyle = styled.input`
  opacity: 0;
  position: absolute;
  &:focus + label {
    transform: scale(1.2);
  }
  &:checked + label::after {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 1;
  }
`;

export const ProfileColorLabelStyle = styled.label`
  width: 32px;
  height: 32px;
  margin: 6px 10px 0;
  position: relative;
  border-radius: 50%;
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
    background: ${({ theme }) => theme.bg_middle()};
    transition: all 0.5s cubic-bezier(0, 2, 0.5, 0.9);
  }
  &[for='brown'] {
    background: ${({ theme }) => theme.brown()};
    box-shadow: 0 5px 10px ${({ theme }) => theme.brown(0.2)},
      0 10px 20px ${({ theme }) => theme.brown(0.15)};
  }

  &[for='green'] {
    background: ${({ theme }) => theme.green()};
    box-shadow: 0 5px 10px ${({ theme }) => theme.green(0.2)},
      0 10px 20px ${({ theme }) => theme.green(0.15)};
  }
  &[for='pink'] {
    background: ${({ theme }) => theme.pink()};
    box-shadow: 0 5px 10px ${({ theme }) => theme.brown(0.2)},
      0 10px 20px ${({ theme }) => theme.brown(0.15)};
  }
  &[for='violet'] {
    background: ${({ theme }) => theme.violet()};
    box-shadow: 0 5px 10px ${({ theme }) => theme.violet(0.2)},
      0 10px 20px ${({ theme }) => theme.violet(0.15)};
  }
  &[for='blue'] {
    background: ${({ theme }) => theme.blue()};
    box-shadow: 0 5px 10px ${({ theme }) => theme.blue(0.2)},
      0 10px 20px ${({ theme }) => theme.blue(0.15)};
  }
`;
