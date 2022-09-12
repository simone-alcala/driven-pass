import * as types from '../types/cardTypes';
import * as repository from '../repositories/cardRepository';
import * as throwError from './../utils/errorUtils';
import { encryptData } from '../utils/encryptData';
import { decryptData } from '../utils/decrypData';

export async function insert(data: types.CreateCardData) {
  data = { 
    ...data, 
    title: data.title.toUpperCase(),
    password: encryptData(data.password),
    securityCode: encryptData(data.securityCode),
    holderName: data.holderName.toUpperCase(),
    type: data.type.toUpperCase() as any
  };
  await getByUserIdAndTitleAndThrow(data.userId, data.title);
  return await repository.insert(data);
}

export async function getByUserId(userId: number) {
  const cards = await repository.getByUserId(userId);
  
  return cards?.map(card => { 
    return { 
      ...card, 
      password: decryptData(card.password),
      securityCode: decryptData(card.securityCode)
  }});
}

export async function getByIdAndUserId(id: number, userId: number) {
  isNanAndFail(id);
  let result = await getByIdAndUserIdAndThrow(id, userId);
  result = { 
    ...result, 
    password: decryptData(result.password),
    securityCode: decryptData(result.securityCode) 
  };
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