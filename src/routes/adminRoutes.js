import config from '~/config';
import FormLogin from '~/pages/admin/Login';
import AdminRegister from '~/pages/admin/Register';
import Dashboard from '~/pages/admin/Dashboard';
import {LayoutAdmin} from '~/Layout';

const { routesAdmin } = config;

export const adminRoutes = [
  {
    path: routesAdmin.login,
    component: FormLogin,
    layout: LayoutAdmin,
    isAuth: true,
  },
  {
    path: routesAdmin.register,
    component: AdminRegister,
    layout: LayoutAdmin,
    isAuth: true,
  },
  {
    path: routesAdmin.dashboard,
    component: Dashboard,
    layout: LayoutAdmin,
  },
];
