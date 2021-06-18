import styled from 'styled-components';

const AsideStyle = styled.aside`
  min-width: 300px;
  /* height: 100%; */
  display: flex;
  background: ${({ theme }) => theme.bg_middle()};
  /* background: red; */
`;

const Aside = () => {
  return <AsideStyle>Aside</AsideStyle>;
};

export default Aside;
