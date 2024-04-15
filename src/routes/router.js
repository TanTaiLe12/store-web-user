import LayoutCommon from '~/Layout';
import config from '~/config';
import Home from '~/pages/Home';
import Login from '~/pages/Login';

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
];

export { publicRoutes };
