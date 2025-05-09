import axiosClient from '../../axiosClient';
import BaseApi from '../../baseApi';

class AuthApi extends BaseApi {
  constructor() {
    super('/admin/');
  }

  login(resource) {
    return axiosClient({
      url: `${this.uri}login`,
      method: 'POST',
      data: resource,
    });
  }

  register(resource) {
    return axiosClient({
      url: `${this.uri}register`,
      method: 'POST',
      data: resource,
    });
  }

  logout(accessToken) {
    return axiosClient({
      url: `${this.uri}logout`,
      method: 'POST',
      data: accessToken,
    });
  }

  userAuth(accessToken) {
    return axiosClient({
      url: `${this.uri}/user`,
      method: 'GET',
      data: accessToken,
    });
  }
}

export default AuthApi;
