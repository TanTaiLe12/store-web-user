import axiosClient from '../axiosClient';
import BaseApi from '../baseApi';

class AuthApi extends BaseApi {
  constructor() {
    super('/');
  }

  login(resource) {
    return axiosClient({
      url: `${this.uri}/login`,
      method: 'POST',
      data: resource,
    });
  }

  logout() {
    return axiosClient({
      url: `${this.uri}/logout`,
      method: 'GET',
    });
  }

  userAuth(accessToken) {
    return axiosClient({
      url: `${this.uri}/user`,
      method: 'GET',
      data: accessToken,
    });
  }

  listAll() {
    return axiosClient({
      url: `${this.uri}`,
      method: 'GET',
    });
  }
  
}

export default AuthApi;
