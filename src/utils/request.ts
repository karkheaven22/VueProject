import axios from 'axios';
import { UserModule } from '@/store/modules/user';


const service = axios.create({
    baseURL: "https://uatapi.twin2u.com", //process.env.VUE_APP_BASE_API,
    timeout: 5000
    // withCredentials: true // send cookies when cross-domain requests
})

  // Request interceptors
service.interceptors.request.use(
    (config) => {
      if (!config) {
        config = {};
      }
      if (!config.headers) {
          config.headers = {};
      }
      // Add X-Access-Token header to every request, you can add other custom headers here
      if (UserModule.token)
        config.headers['X-Access-Token'] = UserModule.token
      return config
    },
    (error) => Promise.reject(error)
)

service.interceptors.response.use(
    (response) => {
        const res = response.data
        return response
    },
    (error) => {
        console.log(error.response.status);
        console.log(error.message);
        return Promise.reject(error)
    }
  )

  export default service
