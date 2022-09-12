import * as types from '../types/networkTypes';
import * as repository from '../repositories/networkRepository';
import * as throwError from './../utils/errorUtils';
import { encryptData } from '../utils/encryptData';
import { decryptData } from '../utils/decrypData';

export async function insert(data: types.CreateNetworkData) {
  data = { 
    ...data, 
    title: data.title.toUpperCase(),
    password: encryptData(data.password)
  };
  return await repository.insert(data);
}

export async function getByUserId(userId: number) { 
  const networks = await repository.getByUserId(userId);
 
  return networks?.map(network => { 
    return { 
      ...network, 
      password: decryptData(network.password)
  }});
}

export async function getByIdAndUserId(id: number, userId: number) {
  isNanAndFail(id);
  let result = await getByIdAndUserIdAndThrow(id, userId);
  result = { ...result, password: decryptData(result.password) };
  return result;
}

export async function deleteByIdAndUserId(id: number, userId: number) { 
  isNanAndFail(id);
  const result = await repository.deleteByIdAndUserId(id, userId);
  if (result.count === 0) {
    throw throwError.notFound('Id not found');
  }
}

async function getByIdAndUserIdAndThrow(id: number, userId: number) {
  const result = await repository.getByIdAndUserId(id, userId);
  if (!result) {
    throw throwError.notFound('Id not found');
  }
  return result;
}

function isNanAndFail(id: number) {
  if (isNaN(id)) {
    throw throwError.notFound('Id not found');
  }
}

export async function totalByUserId(userId: number) {
  return await repository.totalByUserId(userId);
}