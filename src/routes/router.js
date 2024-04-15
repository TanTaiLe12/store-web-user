import LayoutCommon from '~/Layout';
import config from '~/config';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ProductDetail from '~/pages/ProductDetail';

const { routes } = config;
const publicRoutes = [
  {
    path: routes.home,
    component: Home,
    layout: LayoutCommon,
  },
  {
    path: routes.login,
    component: Login,
    layout: LayoutCommon,
  },
  {
    path: routes.product,
    component: ProductDetail,
    layout: LayoutCommon,
  },
];

export { publicRoutes };
