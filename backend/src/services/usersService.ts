import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

import { User } from '@prisma/client';
import * as repository from './../repositories/usersRepository.js';
import * as throwError from './../utils/errorUtils.js';

export type CreateUserData = Omit<User, 'id'>;
export type UpdateUserData = Partial<CreateUserData>;

const JWT_KEY = process.env.JWT_KEY;

export function validateToken(token: string, message: string) {
  let result = null;
  jwt.verify(token, JWT_KEY, function(err, decoded) {
    if (err) {
      throw throwError.unauthorized(message);
    } else {
      result = decoded;
    }
  });
  return result;
}

async function getUserByEmail(email: string) {
  return await repository.findByEmail(email);
}

async function getUserById(id: number) {
  return await repository.findById(id);
}

export async function findUserAndFail(email: string) {
  const result = await getUserByEmail(email);
  if (result) {
    throw throwError.conflic('Email already registered');
  }
}

export async function findUserOrFail(email: string, id: number, message: string) {
  let result: User = null;
  if (email) {
    result = await getUserByEmail(email);
  } else {
    result = await getUserById(id);
  }
  if (!result) {
    throw throwError.notFound(message);
  }
  return result;
}
