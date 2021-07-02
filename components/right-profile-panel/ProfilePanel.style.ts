import styled from 'styled-components';

export const ProfilePanelStyle = styled.aside`
  grid-column: 2;
  grid-row: 1 / -1;
  width: 300px;
  /* height: 100%; */
  display: grid;
  grid-template-rows: 195px 50px 1fr;
  padding: 0px 20px 35px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: ${({ theme }) => theme.border_radius};
  background: ${({ theme }) => theme.bg_middle()};
  box-shadow: -10px 0px 40px ${({ theme }) => theme.bg_black(0.2)},
    -10px 0px 10px ${({ theme }) => theme.bg_black(0.3)};
  z-index: 1;
  svg#logotip {
    place-self: center;
  }
  h3 {
    grid-row: 2;
    text-transform: uppercase;
    color: ${({ theme }) => theme.grey_middle()};
    font-size: ${({ theme }) => theme.fontsize_16};
    font-weight: 500;
  }
  & .profiles {
    grid-row: 3;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;
