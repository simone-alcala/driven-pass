import { AxiosResponse } from 'axios';
import { axiosConfig, getBearerToken } from './api';

export type TotalsType = {
  userId: number,
  totalCredentials: number,
  totalCards: number,
  totalNetworks: number,
  totalSafeNotes: number,
}

async function getTotals(token: string): Promise<AxiosResponse<TotalsType>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.get('/totals', bearerToken );
}

async function validateToken(token: string): Promise<AxiosResponse> {
  return await axiosConfig.post('/token', { token });
}

const userApi = {
  getTotals,
  validateToken
};

export default userApi;