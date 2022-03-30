import { LayoutWrapper } from '../styles/LayoutWrapper';
import { FooterArea } from './FooterArea';
import { HeaderArea } from './HeaderArea';
import { SideNavArea } from './SideNavArea';

export const LayoutArea = ({ children, bg }: any) => {
  return (
    <LayoutWrapper>
      <HeaderArea />
      <SideNavArea />
      <main>{children}</main>
      <FooterArea />
    </LayoutWrapper>
  );
};
