import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '~/config';

const { routes } = config;

function useRedirect() {
  const navigate = useNavigate();

  const formatRoute = (route, params = null, query = null) => {
    const routeArray = route.split('/');

    if (params) {
      const paramsFormatted = Object.entries(params).filter(([key]) => route.includes(`:${key}`));

      const newRouteArray = routeArray.map((item) => {
        const paramKey = item.replace(':', '').replace('?', '');
        return paramsFormatted.find(([key]) => key === paramKey) ? params[paramKey] : item;
      });

      route = newRouteArray.join('/');
    } else {
      route = routeArray.filter((item) => !item.includes('?')).join('/');
    }

    if (query) {
      const queryString = Object.entries(query)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
      route = `${route}?${queryString}`;
    }

    return route;
  };

  const executeRedirect = useCallback(
    (route, options = {}) => {
      const { params, query } = options;
      const destination = formatRoute(route, params, query);
      navigate(destination);
    },
    [navigate],
  );

  const executeRedirectLink = useCallback((route, options = {}) => {
    const { params, query } = options;
    return formatRoute(route, params, query);
  }, []);

  const push = useCallback(
    (route, options = {}) => {
      executeRedirect(route, options);
    },
    [executeRedirect],
  );

  const goBack = (scrollTop) => {
    window.history.length > 1 ? navigate(-1) : navigate(routes.member);

    let timeout;
    if (scrollTop) {
      timeout = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    return () => {
      clearTimeout(timeout);
    };
  };

  return { goBack, push, executeRedirectLink };
}

export default useRedirect;
