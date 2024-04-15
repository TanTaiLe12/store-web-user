import Footer from '~/components/Footer';
import Header from '~/components/Header';

import LayoutStyled from './styled';

function LayoutCommon({ children }) {
  return (
    <LayoutStyled>
      <Header />
      <div>{children}</div>
      <Footer />
    </LayoutStyled>
  );
}

export default LayoutCommon;
