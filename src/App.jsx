import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { usersRoutes, adminRoutes } from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { Fragment } from 'react';
import './assets/global.scss';

function Apps() {
  const allRoutes = [...usersRoutes, ...adminRoutes];
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {allRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : route.layout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout isAuth={route.isAuth}>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </Provider>
  );
}

export default Apps;
