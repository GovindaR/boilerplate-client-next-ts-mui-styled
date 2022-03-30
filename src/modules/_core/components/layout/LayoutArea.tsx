import styled from "styled-components";
import FooterArea from "./FooterArea";
import HeaderArea from "./HeaderArea";

const LayoutWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

function LayoutArea({ children }: any) {
  return (
    <LayoutWrapper>
      <HeaderArea />
      <main>{children}</main>
      <FooterArea />
    </LayoutWrapper>
  );
}
export default LayoutArea;
