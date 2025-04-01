import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { LayoutStyled } from './styled';
import LayoutAdminStyled from './styled/LayoutAdminStyled';

function LayoutCommon({ children, isHeader = true }) {
  return (
    <div>
      {isHeader ? (
        <LayoutStyled>
          <Header />
          <div>{children}</div>
          <Footer />
        </LayoutStyled>
      ) : (
        <LayoutAdminStyled>{children}</LayoutAdminStyled>
      )}
    </div>
  );
}

export default LayoutCommon;
