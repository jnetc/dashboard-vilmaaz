import styled from 'styled-components';

export const ScheduleDayStyle = styled.div`
  display: grid;
  grid-template-rows: 64px max-content 56px;
  gap: 25px;
  ul {
    display: grid;
    grid-template-rows: repeat(auto-fill, 56px);
    gap: 25px;
  }
`;
