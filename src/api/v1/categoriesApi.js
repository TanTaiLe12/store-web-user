import axiosClient from '../axiosClient';
import BaseApi from '../baseApi';

class AuthApi extends BaseApi {
  constructor() {
    super('/categories');
  }

  listAll() {
    return axiosClient({
      url: `${this.uri}/`,
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
  showProducts(id) {
    return axiosClient({
      url: `${this.uri}/${id}/products`,
      method: 'GET',
    });
  }
}

export default AuthApi;
