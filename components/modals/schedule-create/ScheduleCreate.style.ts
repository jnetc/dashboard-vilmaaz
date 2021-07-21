import styled from 'styled-components';

export const ScheduleCreateStyle = styled.form`
  width: 100vw;
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px max-content 54px;
  column-gap: 30px;
  row-gap: 45px;
  padding: 0px 100px;
  /* margin-bottom: 50px; */
  /* user-select: none; */
  div#wrapper-timetable {
    grid-column: 1 / -1;
    grid-row: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
