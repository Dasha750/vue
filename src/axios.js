import axios from 'axios'

const getToken = () => '413414141'

const instance = axios.create({
  baseURL: 'http://localhost:3004/',
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
})

export default instance
