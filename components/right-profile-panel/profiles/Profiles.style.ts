import styled from 'styled-components';

export const ProfilesStyle = styled.div<{ showTimeline: string }>`
  display: grid;
  grid-template-columns: 60px 1fr 30px;
  grid-template-rows: 30px 25px 21px;
  padding: 10px;
  gap: 7px 15px;
  position: relative;
  background: ${({ theme }) => theme.bg_middle()};
  border-radius: ${({ theme }) => theme.border_radius};
  box-shadow: 0 10px 20px ${({ theme }) => theme.bg_black(0.2)},
    0 5px 5px ${({ theme }) => theme.bg_black(0.3)};
  transition: all 0.3s ease-in-out;
  user-select: none;
  &:hover {
    background: ${({ theme }) => theme.bg_light()};
    box-shadow: 0 20px 20px ${({ theme }) => theme.bg_black(0.3)},
      0 10px 10px ${({ theme }) => theme.bg_black(0.4)};
    figure {
      background: ${({ theme }) => theme.bg_middle()};
    }
    div.show-timeline {
      opacity: 1;
      transform: translateX(0);
    }
  }
  div.show-timeline {
    width: 3px;
    height: 80px;
    position: absolute;
    top: 0;
    left: -20px;
    opacity: 0;
    border-radius: 5px;
    background: var(--${({ showTimeline }) => showTimeline});
    transform: translateX(15px);
    transition: all 0.3s cubic-bezier(0, 1.59, 0.63, 0.79);
    z-index: -1;
  }
  figure {
    grid-column: 1;
    grid-row: 1 /-1;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg_light()};
    transition: all 0.3s ease-in-out;
    user-select: none;
  }
  h4 {
    grid-column: 2;
    grid-row: 1;
    align-self: flex-end;
    font-size: ${({ theme }) => theme.fontsize_18};
  }
  p.amount {
    grid-column: 2;
    grid-row: 3;
    align-self: flex-start;
    color: ${({ theme }) => theme.grey_light()};
    font-size: ${({ theme }) => theme.fontsize_13};
    b {
      padding-left: 5px;
      color: ${({ theme }) => theme.white_soft()};
    }
  }
  div.profile-menu {
    grid-column: 3;
    grid-row: 1 /-1;
    display: flex;
    width: 30px;
    height: 40px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.grey_light()};
    font-size: 1rem;
    position: relative;
    cursor: pointer;
    &::before,
    &::after {
      content: '•';
      position: absolute;
      left: 12px;
      color: ${({ theme }) => theme.grey_light()};
    }
    &::before {
      top: 3px;
    }
    &::after {
      bottom: 3px;
    }
  }
`;
