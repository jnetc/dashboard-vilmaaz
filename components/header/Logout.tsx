import styled from 'styled-components';

const LogoutStyle = styled.div`
  justify-self: flex-end;
  padding-right: 30px;
`;

export const Logout = () => {
  return (
    <LogoutStyle>
      <h1>Logout</h1>
    </LogoutStyle>
  );
};
