import styled from 'styled-components';

export const ProfileMenuStyle = styled.div<{ open: boolean }>`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: ${({ open }) => (open ? 'grid' : 'none')};
  grid-template-columns: 1fr 30px;
  grid-template-rows: repeat(3, 1fr);
  padding: 10px;
  gap: 5px 15px;
  position: absolute;
  inset: -10px;
  border-radius: ${({ theme }) => theme.border_radius};
  background-color: ${({ theme }) => theme.bg_light()};
  transition: all 0.3s ease-in-out;
  z-index: 1;
  & .profile-menu-item {
    grid-column: 1;
    color: ${({ theme }) => theme.white_soft()};
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.grey_light()};
    }
    svg {
      margin-right: 10px;
      stroke: ${({ theme }) => theme.grey_middle()};
      stroke-width: 1.3;
    }
  }
  .profile-menu-item:nth-of-type(1) {
    grid-row: 1;
  }
  .profile-menu-item:nth-of-type(2) {
    grid-row: 2;
  }
  .profile-menu-item:nth-of-type(3) {
    grid-row: 3;
  }
`;
