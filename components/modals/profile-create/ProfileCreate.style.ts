import styled from 'styled-components';

export const ProfileCreateStyle = styled.form`
  min-width: 500px;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 1fr 54px 54px;
  column-gap: 30px;
  row-gap: 45px;
  user-select: none;
  section#modal-profile {
    grid-column: 1 / -1;
    grid-row: 2;
    display: grid;
    grid-template-rows: 270px 73px 73px;
    gap: 25px;
    place-items: center;
    position: relative;
  }
`;
