import axiosClient from './axiosClient';

class BaseApi {
  constructor(uri) {
    this.uri = uri;
  }

  list(query) {
    return axiosClient({
      url: this.uri,
      method: 'GET',
      params: query,
    });
  }

  all() {
    return axiosClient({
      url: `${this.uri}/all`,
      method: 'GET',
    });
  }

  get(id) {
    return axiosClient({
      url: `${this.uri}/edit/${id}`,
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
      url: `${this.uri}/edit/${id}`,
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

  massDestroy(resource) {
    return axiosClient({
      url: `${this.uri}/multi_delete`,
      method: 'DELETE',
      params: resource,
    });
  }

  restore(key) {
    return axiosClient({
      url: `${this.uri}/restore/${key}`,
      method: 'POST',
    });
  }

  copy(resource, id) {
    return axiosClient({
      url: `${this.uri}/${id}`,
      method: 'GET',
      data: resource,
    });
  }
}

export default BaseApi;
