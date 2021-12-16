import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #1f92f7;
  color: #fff;
  padding: 4rem 0;
  font-weight: bold;
  text-align: center;
  font-size: 3rem;
`;
function HeaderArea() {
  return <HeaderWrapper>Header Area</HeaderWrapper>;
}
export default HeaderArea;
