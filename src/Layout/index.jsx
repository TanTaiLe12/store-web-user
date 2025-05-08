import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { LayoutStyled, LayoutAdminStyled } from './styled';

function LayoutCommon({ children, isHeader = true, isAdmin = false }) {
  return (
    <div>
      {isAdmin ? (
        <LayoutAdminStyled>
          <div>{children}</div>
        </LayoutAdminStyled>
      ) : (
        <div style={{ height: '100%' }}>
          <LayoutStyled isHeader={isHeader}>
            {isHeader && <Header />}
            {children}
          </LayoutStyled>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default LayoutCommon;
