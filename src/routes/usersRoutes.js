import {LayoutUser} from '~/Layout';
import config from '~/config';
import Home from '~/pages/users/Home';
import Product from '~/pages/users/Product';
import Categories from '~/pages/users/Categories';
import FormLogin from '~/pages/auth/Login';
import FormRegister from '~/pages/auth/Register';

const { routes } = config;

export const usersRoutes = [
  {
    path: routes.home,
    component: Home,
    layout: LayoutUser,
  },
  {
    path: routes.login,
    component: FormLogin,
    layout: LayoutUser,
    isAuth: true,
  },
  {
    path: routes.register,
    component: FormRegister,
    layout: LayoutUser,
    isAuth: true,
  },
  {
    path: routes.product.root,
    component: Product,
    layout: LayoutUser,
  },
  {
    path: routes.categories.root,
    component: Categories,
    layout: LayoutUser,
  },
];
