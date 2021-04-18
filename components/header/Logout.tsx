import styled from 'styled-components';
import { Button } from '../buttons/Button';

const LogoutStyle = styled.div`
  justify-self: flex-end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding-right: 30px;
  row-gap: 5px;
  column-gap: 10px;
  p {
    grid-column: 1;
    grid-row: 1;
    justify-self: flex-end;
    align-self: flex-end;
    font-size: ${({ theme }) => theme.fontsize_14};
    color: ${({ theme }) => theme.grey_light};
  }
  h4 {
    grid-column: 1;
    grid-row: 2;
    font-size: ${({ theme }) => theme.fontsize_18};
  }
  button {
    grid-column: 2;
    grid-row: 1 / -1;
  }
`;

export const Logout = () => {
  return (
    <LogoutStyle>
      <p>Tervetuloa takaisin</p>
      <h4>Mikael Sipolainen</h4>
      <Button colorTheme={'primary'}>Kirjaudu ulos</Button>
    </LogoutStyle>
  );
};
