import UIInput from '../UIInput';
import { HeaderStyled } from './styled';
const ICON_LOGO = '/images/logo.svg';
const ICON_SEARCH = '/images/search.svg';
const ICON_CART = '/images/icon_cart.png';

const NAVI = [
  {
    title: 'Góp ý',
    link: '',
    active: true,
  },
  {
    title: 'Kiểm tra đơn hàng',
    link: '',
    active: false,
  },
  {
    title: 'Chăm sóc khách hàng',
    link: '',
    active: false,
  },
  {
    title: 'Đăng nhập',
    link: '',
    active: false,
  },
  {
    title: 'Đăng ký',
    link: '',
    active: false,
  },
];

function Header() {
  return (
    <HeaderStyled>
      <div className="inner">
        <div className="header__content">
          <h1 className="logo">
            <a href="/">
              <img src={ICON_LOGO} alt="Store Electronic" />
            </a>
          </h1>
          <div className="header__content--right">
            <div className="header__search">
              <UIInput placeholder="Tìm kiếm" />
              <div className="btn-search">
                <img src={ICON_SEARCH} alt="search" />
              </div>
            </div>
            <div className="header__cart">
              <img src={ICON_CART} alt="cart" />
            </div>
          </div>
        </div>
        <div className="navi">
          {NAVI.map((item, index) => (
            <div key={index} className={`navi__item ${item.active ? 'active' : ''}`}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
