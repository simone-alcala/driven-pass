import { AxiosResponse } from 'axios';
import { axiosConfig, getBearerToken } from './api';

export type NetworkType = {
  id?: string | number;
  title: string;
  name: string;
  password: string;
}

const url = '/networks';

async function insertNetwork(data: NetworkType, token: string): Promise<AxiosResponse<{createdId: number}>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.post(url, data, bearerToken );
}

async function getNetworkById(token: string, id: string): Promise<AxiosResponse<NetworkType>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.get(`${url}/${id}`, bearerToken );
}

async function getNetworks(token: string): Promise<AxiosResponse<NetworkType[]>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.get(url, bearerToken );
}

async function deleteNetwork(token: string, id: string) {
  const bearerToken = getBearerToken(token);
  return await axiosConfig.delete(`${url}/${id}`, bearerToken );
}

const networkApi = {
  insertNetwork,
  getNetworkById,
  getNetworks,
  deleteNetwork,
};

export default networkApi;