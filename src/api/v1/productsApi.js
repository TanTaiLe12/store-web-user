import axiosClient from '../axiosClient';
import BaseApi from '../baseApi';

class AuthApi extends BaseApi {
  constructor() {
    super('/products');
  }

  listAll() {
    return axiosClient({
      url: `${this.uri}/`,
      method: 'GET',
    });
  }
  showDetail(id) {
    return axiosClient({
      url: `${this.uri}/detail/${id}`,
      method: 'GET',
    });
  }
  store(resource) {
    return axiosClient({
      url: `${this.uri}/create`,
      method: 'POST',
      data: resource,
    });
  }
  update(resource, id) {
    return axiosClient({
      url: `${this.uri}/update/${id}`,
      method: 'PUT',
      data: resource,
    });
  }
  destroy(id) {
    return axiosClient({
      url: `${this.uri}/delete/${id}`,
      method: 'DELETE',
    });
  }
  search(id) {
    return axiosClient({
      url: `${this.uri}/search`,
      method: 'GET',
    });
  }
}

export default AuthApi;
