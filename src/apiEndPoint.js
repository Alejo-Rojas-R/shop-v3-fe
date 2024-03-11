import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://18.231.53.212:8082/'
});