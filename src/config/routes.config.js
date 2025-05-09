const routes = {
  login: '/login',
  register: '/register',
  home: '/',
  categories: {
    root: '/categories',
  },
  product: {
    root: '/products',
    create: '/products/create',
  },
};

const routesAdmin = {
  login: '/admin/login',
  register: '/admin/register',
  dashboard: '/admin/dashboard',
  home: '/admin',
  categories: {
    root: '/admin/categories',
    create: '/admin/categories/create',
  },
  product: {
    root: '/admin/products',
    create: '/admin/products/create',
  },
};

export {routes, routesAdmin};
