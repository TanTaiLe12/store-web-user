import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { LayoutStyled } from '../styled';

function LayoutUser({children, isAuth = false}) {
  console.log(isAuth);
  
  return (
    <LayoutStyled isAuth={!isAuth}>
      {!isAuth && <Header />}
        {children}
      {!isAuth && <Footer />}
    </LayoutStyled>
  )
}

export default LayoutUser
