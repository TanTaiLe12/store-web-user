import LayoutCommon from '~/Layout';
import config from '~/config';
import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import FormLogin from '~/pages/Login';
import FormRegister from '~/pages/Register';

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
    path: routes.product,
    component: ProductDetail,
    layout: LayoutCommon,
  },
];

export { publicRoutes };
