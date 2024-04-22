import { Link } from 'react-router-dom';
import { FooterSpStyled } from '../styled';

const F_NAVIGATE = [
  {
    title: 'Home',
    icon: '/public/images/icon_home.svg',
    link: '/',
  },
  {
    title: 'Categories',
    icon: '/public/images/icon_category.svg',
    link: '/categories',
  },
  {
    title: 'Notification',
    icon: '/public/images/icon_notify.svg',
    link: '/notification',
  },
  {
    title: 'Account',
    icon: '/public/images/icon_accout.svg',
    link: '/account',
  },
];

function FooterSp() {
  return (
    <FooterSpStyled>
      <div className="inner">
        <div className="f-navigate">
          {F_NAVIGATE.map((item, index) => (
            <Link className="f-navigate__item" to={item.link} key={index}>
              <img className="icon" src={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </FooterSpStyled>
  );
}

export default FooterSp;
