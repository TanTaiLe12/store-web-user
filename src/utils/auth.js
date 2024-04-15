import Cookies from 'js-cookie';
import config from '~/config';

const { cookieConfig } = config;

function getToken() {
  return Cookies.get(cookieConfig.auth_token_key);
}

function setToken(token, expires = 1) {
  Cookies.set(cookieConfig.auth_token_key, token, { expires });
}

function removeToken() {
  Cookies.remove(cookieConfig.auth_token_key);
}

export { getToken, removeToken, setToken };
