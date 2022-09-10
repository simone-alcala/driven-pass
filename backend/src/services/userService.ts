import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

import { User } from '@prisma/client';
import * as repository from '../repositories/userRepository';
import * as throwError from '../utils/errorUtils';
import * as types from '../types/userType';


const JWT_KEY = process.env.JWT_KEY || '';

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

export async function findUserOrFail(email: string | null, id: number | null, message: string) {
  let result: User | null = null;
  if (email) {
    result = await getUserByEmail(email);
  } else if (id) {
    result = await getUserById(id);
  }
  if (!result) {
    throw throwError.notFound(message);
  }
  return result;
}
