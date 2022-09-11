import * as types from '../types/credentialType';
import * as repository from '../repositories/credentialRepository';
import * as throwError from './../utils/errorUtils';
import { encryptData } from '../utils/encryptData';
import { decryptData } from '../utils/decrypData';

export async function insert(data: types.CreateCredentialData) {
  data = { 
    ...data, 
    title: data.title.toLocaleUpperCase(),
    password: encryptData(data.password)
  };
  await getByUserIdAndTitleAndThrow(data.userId, data.title);
  return await repository.insert(data);
}

export async function getByUserId(userId: number) {
  const credentials = await repository.getByUserId(userId);
  credentials.map(credential => {
    return {
      ...credential,
      password: decryptData(credential.password)
    }
  });
  return credentials;
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

async function getByUserIdAndTitleAndThrow(userId: number, title: string) {
  const result = await repository.getByUserIdAndTitle(userId, title);
  if (result) {
    throw throwError.conflic('Title already registered');
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