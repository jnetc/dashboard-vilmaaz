import styled, { keyframes } from 'styled-components';
// Animation (flash effect)
const impulse = (visible: string, hidden: string) => keyframes`
  0% {box-shadow: 0 0 0 0px ${visible}}
  100% {box-shadow: 0 0 0 10px ${hidden}}
`;

// COUNTER

export const CountStyle = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15%;
  left: 55%;
  color: ${({ theme }) => theme.bg_main()};
  font-size: ${({ theme }) => theme.fontsize_14};
  font-weight: bold;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.bg_main()};
  background-color: ${({ theme }) => theme.primary()};
  letter-spacing: 0px;
  &.notice {
    animation: ${({ theme }) => impulse(theme.primary(), theme.primary(0))} 1s
      ease-in-out forwards;
  }
`;

// LINK
export const LinkStyle = styled.li`
  margin-bottom: 1.9rem;
  width: 7.5rem;
  height: 7.5rem;
  a {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    border: 2px solid transparent;
    color: ${({ theme }) => theme.grey_light()};
    font-size: ${({ theme }) => theme.fontsize_16};
    transition: all 0.3s ease-in-out;
    user-select: none;
  }
  svg {
    stroke: ${({ theme }) => theme.grey_light()};
    transition: all 0.3s ease-in-out;
  }
  span.link-name {
    margin-top: 10px;
  }
  &:hover,
  &:focus {
    a {
      color: ${({ theme }) => theme.white()};
    }
    svg {
      stroke: ${({ theme }) => theme.white()};
    }
  }
  &.active {
    a {
      border-color: ${({ theme }) => theme.primary()};
      color: ${({ theme }) => theme.white()};
      box-shadow: 0 5px 5px ${({ theme }) => theme.primary(0.15)},
        0 20px 20px ${({ theme }) => theme.primary(0.1)};
    }
    svg {
      stroke: ${({ theme }) => theme.white()};
    }
  }
`;

// NAV
export const NavigationStyle = styled.nav`
  min-width: 220px;
  height: 100vh;
  display: flex;
  top: 0px;
  position: sticky;
  transition: all 0.3s ease-in-out;
  z-index: 500;
  > div {
    display: grid;
    grid-template-rows: 120px 1fr;
    justify-content: center;
    min-width: inherit;
    height: 100%;
    padding: 35px 0;
    overflow-y: auto;
  }
  svg.logo {
    justify-self: center;
    align-items: flex-start;
  }
  ul {
    justify-self: center;
    align-self: center;
  }
  &.open {
    display: grid;
  }
  &.show {
    display: grid;
    transform: translateX(0);
  }
`;
