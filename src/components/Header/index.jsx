import config from '~/config';
import UIInput from '../UIInput';
import { HeaderStyled } from './styled';
import AuthApi from '~/api/v1/authApi';

import useRedirect from '~/hooks/useRedirect';
import Modal from '../UIModal';
import { useState } from 'react';

const { routes } = config;
const authApi = new AuthApi();

const NAVI = [
  {
    title: 'Home',
    type: 1,
    show: true,
  },
  {
    title: 'Product',
    type: 2,
    show: true,
  },
  {
    title: 'Oder',
    type: 3,
    show: true,
  },
  {
    title: 'About',
    type: 4,
    show: true,
  },
  {
    title: 'Login',
    type: 5,
    show: true,
  },
  {
    title: 'Logout',
    type: 6,
    show: true,
  },
];

const TYPE_HOME = 1;
const TYPE_PRODUCT = 2;
const TYPE_ODER = 3;
const TYPE_ABOUT = 4;
const TYPE_LOGIN = 5;
const TYPE_LOGOUT = 6;

const ICON_LOGO = '/images/logo.svg';
const ICON_SEARCH = '/images/search.svg';
const ICON_CART = '/images/icon_cart.png';

function Header() {
  const redirect = useRedirect();
  const [isShowModal, setShowModal] = useState(false);

  const handleMenu = (key) => {
    switch (key) {
      case TYPE_HOME:
        redirect.push();
        break;
      case TYPE_PRODUCT:
        redirect.push();
        break;
      case TYPE_ODER:
        redirect.push();
        break;
      case TYPE_ABOUT:
        redirect.push();
        break;
      case TYPE_LOGIN:
        redirect.push(routes.login);
        break;
      case TYPE_LOGOUT:
        setShowModal(true);
        break;
      default:
        break;
    }
  };
  const handleLogout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      // error
    } finally {
      redirect.push(routes.login);
    }
  };
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
            <div
              key={index}
              className={`navi__item ${item.active ? 'active' : ''}`}
              onClick={() => handleMenu(item.type)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isShowModal}
        title="Logout"
        message="Bạn có chắc Logout ?"
        onClose={() => setShowModal(false)}
        onSubmit={() => handleLogout()}
      />
    </HeaderStyled>
  );
}

export default Header;
