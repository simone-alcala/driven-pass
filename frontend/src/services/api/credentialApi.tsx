import { AxiosResponse } from 'axios';
import { axiosConfig, getBearerToken } from './api';

export type CredentialType = {
  id?: string | number;
  title: string;
  url: string;
  username: string;
  password: string;
}

const url = '/credentials';

async function insertCredential(data: CredentialType, token: string): Promise<AxiosResponse<{createdId: number}>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.post(url, data, bearerToken );
}

async function getCredentialById(token: string, id: string): Promise<AxiosResponse<CredentialType>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.get(`${url}/${id}`, bearerToken );
}

async function getCredentials(token: string): Promise<AxiosResponse<CredentialType[]>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.get(url, bearerToken );
}

async function deleteCredential(token: string, id: string) {
  const bearerToken = getBearerToken(token);
  return await axiosConfig.delete(`${url}/${id}`, bearerToken );
}

const credentialApi = {
  insertCredential,
  getCredentialById,
  getCredentials,
  deleteCredential,
};

export default credentialApi;