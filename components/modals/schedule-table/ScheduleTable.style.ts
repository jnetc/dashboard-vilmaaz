import styled from 'styled-components';

export const ScheduleTableStyle = styled.section`
  grid-column: 1 /-1;
  grid-row: 2;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, auto));
  gap: 50px;
`;
