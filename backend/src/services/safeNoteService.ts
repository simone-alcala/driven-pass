import * as types from '../types/safeNoteTypes';
import * as repository from '../repositories/safeNoteRepository';
import * as throwError from './../utils/errorUtils';

export async function insert(data: types.CreateSafeNoteData) {
  data = { 
    ...data, 
    title: data.title.toLocaleUpperCase()
  };
  await getByUserIdAndTitleAndThrow(data.userId, data.title);
  return await repository.insert(data);
}

export async function getByUserId(userId: number) {
  const safeNotes = await repository.getByUserId(userId);
  return safeNotes;
}

export async function getByIdAndUserId(id: number, userId: number) {
  isNanAndFail(id);
  return await getByIdAndUserIdAndThrow(id, userId);
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