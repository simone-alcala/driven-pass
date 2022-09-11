import { AxiosResponse } from 'axios';
import { axiosConfig, getBearerToken } from './api';

export type SafeNoteType = {
  id?: string | number;
  title: string;
  note: string;
}

const url = '/safenotes';

async function insertSafeNote(data: SafeNoteType, token: string): Promise<AxiosResponse<{createdId: number}>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.post(url, data, bearerToken );
}

async function getSafeNoteById(token: string, id: string): Promise<AxiosResponse<SafeNoteType>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.get(`${url}/${id}`, bearerToken );
}

async function getSafeNotes(token: string): Promise<AxiosResponse<SafeNoteType[]>>{
  const bearerToken = getBearerToken(token);
  return await axiosConfig.get(url, bearerToken );
}

async function deleteSafeNote(token: string, id: string) {
  const bearerToken = getBearerToken(token);
  return await axiosConfig.delete(`${url}/${id}`, bearerToken );
}

const safeNoteApi = {
  insertSafeNote,
  getSafeNoteById,
  getSafeNotes,
  deleteSafeNote,
};

export default safeNoteApi;