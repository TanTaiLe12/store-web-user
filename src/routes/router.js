import LayoutCommon from '~/Layout';
import config from '~/config';
import Home from '~/pages/users/Home';
import Product from '~/pages/users/Product';
import Categories from '~/pages/users/Categories';
import FormLogin from '~/pages/auth/Login';
import FormRegister from '~/pages/auth/Register';

const { routes } = config;
const publicRoutes = [
  {
    path: routes.home,
    component: Home,
    layout: LayoutCommon,
  },
  {
    path: routes.login,
    component: FormLogin,
    layout: LayoutCommon,
    isHeader: false,
  },
  {
    path: routes.register,
    component: FormRegister,
    layout: LayoutCommon,
    isHeader: false,
  },
  {
    path: routes.product.root,
    component: Product,
    layout: LayoutCommon,
  },
  {
    path: routes.categories.root,
    component: Categories,
    layout: LayoutCommon,
  },
];


export { publicRoutes };
