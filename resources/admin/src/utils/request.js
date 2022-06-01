import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    console.log(response.data)
    return response.data
  },
  error => {
    console.log('err' + error) // for debug
    console.log(error.response.status)
    console.log(error)
    if (error.response && error.response.status == 401) {
      store.dispatch('logout')
      Message({
        message: 'Your Login Credentials Do Not Match Our Records!',
        type: 'error',
        duration: 5 * 1000
      })
      if (router.currentRoute.name != '/login') {
        router.push({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      } else {
        router.push('/login')
      }
    } else {
      Message({
        // message: error.message,
        message: error.response.data.errors,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  }
)

export default service
