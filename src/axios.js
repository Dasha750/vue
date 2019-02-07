import axios from 'axios'
import { URL_API } from '@/constants/config.js'

const getToken = () => '413414141'

const instance = axios.create({
  baseURL: URL_API,
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
})

export default instance
