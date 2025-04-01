import axios from 'axios'
import { getToken, removeToken } from '~/utils/auth'

const API_SERVICE = import.meta.env.VITE_APP_API_SERVICE

const axiosClient = axios.create({
  baseURL: API_SERVICE,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosClient.interceptors.request.use(
  (config) => {
    const tokenData = getToken()

    if (tokenData) {
      config.headers['Authorization'] = 'Bearer ' + tokenData
    }

    return config
  },
  (error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  (response) => {
    if (response.headers.authorization) {
      response.data.token = response.headers.authorization
    }
    return response.data || response
  },
  (error) => {
    const { response } = error
    switch (response?.status) {
      case 404:
        console.log('404 error handler!')
        break
      case 500:
          console.log('500 error handler!')
        break
      case 429:
        break
      case 401:
        removeToken()
        window.location.href = '/login'
        break
      default:
        // eslint-disable-next-line no-case-declarations
        const dError = {
          status: response?.status,
          textStatus: response?.textStatus,
          message: response?.data?.message || ''
        }
        console.error('App Error:', dError)
    }

    return Promise.reject(error)
  }
)



export default axiosClient
