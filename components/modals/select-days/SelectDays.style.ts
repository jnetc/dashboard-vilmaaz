import styled from 'styled-components';

export const SelectDaysStyle = styled.form`
  min-width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 1fr 54px;
  column-gap: 30px;
  row-gap: 45px;
  user-select: none;
  section#modal-days {
    grid-column: 1 /-1;
    grid-row: 2;
    display: grid;
    grid-template-rows: repeat(6, 64px);
    gap: 25px;
  }
`;
