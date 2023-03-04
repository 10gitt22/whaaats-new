import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
  }
})

$api.interceptors.request.use(
  config => {
    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY)
    if (token) {
      config.headers!.authorization = token
    }
    return config
  },
  async (error) => await Promise.reject(error)
)
