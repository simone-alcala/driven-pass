import { AxiosResponse } from 'axios';
import { axiosConfig, getBearerToken } from './api';

export type CardType = {
  id?: string | number;
  title: string;
  number: string;
  holderName: string;
  securityCode: string;
  expirationDate: string;
  password: string;
  virtual: boolean;
  type: 'CREDIT' | 'DEBIT' | 'BOTH'
}

const url = '/cards';

async function insertCard(data: CardType, token: string): Promise<AxiosResponse<{createdId: number}>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.post(url, data, bearerToken );
}

async function getCardById(token: string, id: string): Promise<AxiosResponse<CardType>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.get(`${url}/${id}`, bearerToken );
}

async function getCards(token: string): Promise<AxiosResponse<CardType[]>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.get(url, bearerToken );
}

async function deleteCard(token: string, id: string) {
  const bearerToken = getBearerToken(token);
  return await axiosConfig.delete(`${url}/${id}`, bearerToken );
}

const cardApi = {
  insertCard,
  getCardById,
  getCards,
  deleteCard,
};

export default cardApi;