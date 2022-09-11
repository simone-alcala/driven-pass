import axios,  { AxiosRequestConfig } from 'axios';

const dev = 'http://localhost:5000'
const prod = 'https://driven-pass-new.herokuapp.com'

export const axiosConfig = axios.create({
  baseURL: dev,
  timeout: 3000,
});

export function getBearerToken(token: string){
  return { 
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
}
