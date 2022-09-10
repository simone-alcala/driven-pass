import axios from 'axios';

const dev = 'http://localhost:5000'
const prod = 'https://driven-pass-new.herokuapp.com'

const axiosConfig = axios.create({
  baseURL: prod,
  timeout: 3000
});

type Authentication = {
  email: string;
  password: string;
}

async function signUp(data: Authentication) {
  return await axiosConfig.post('/sign-up', data);
}

async function signIn(data: Authentication) {
  return await axiosConfig.post('/sign-in', data);
}

const Api = {
  signIn,
  signUp,
};

export default Api;