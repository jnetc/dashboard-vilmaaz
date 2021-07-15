import styled from 'styled-components';

export const SelectDaysStyle = styled.form`
  min-width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 1fr 54px;
  gap: 30px;
  user-select: none;
`;

export const SelectDaysGroupStyle = styled.fieldset`
  grid-column: 1 /-1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border: none;
`;
