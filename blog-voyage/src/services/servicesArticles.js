import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'https://blog-voyage.herokuapp.com/',
  // baseURL: 'http://localhost:5000/',
  headers: {
    authorization: ''
  }
})
