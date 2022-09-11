import { axiosConfig } from './api';

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

const AuthApi = {
  signIn,
  signUp,
};

export default AuthApi;