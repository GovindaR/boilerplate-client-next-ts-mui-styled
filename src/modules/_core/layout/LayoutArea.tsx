import { LayoutWrapper } from '../styles/LayoutWrapper';
import { FooterArea } from './FooterArea';
import { HeaderArea } from './HeaderArea';

export const LayoutArea = ({ children, bg }: any) => {
  return (
    <LayoutWrapper>
      <HeaderArea />
      <main style={{ backgroundColor: bg }}>{children}</main>
      <FooterArea />
    </LayoutWrapper>
  );
};
