import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { Fragment } from 'react';
import './assets/global.scss';

function Apps() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : route.layout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
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
