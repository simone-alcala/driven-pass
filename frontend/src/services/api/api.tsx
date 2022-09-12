import axios,  { AxiosRequestConfig } from 'axios';

const DEV = 'http://localhost:5000'
const PROD = 'https://driven-pass-new.herokuapp.com'

export const axiosConfig = axios.create({
  baseURL: PROD,
  timeout: 3000,
});

export function getBearerToken(token: string){
  return { 
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
}
