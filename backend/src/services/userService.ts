import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

import { User } from '@prisma/client';
import * as throwError from '../utils/errorUtils';
import * as repository from '../repositories/userRepository';
import * as credentials from '../services/credentialService';
import * as safeNotes from '../services/safeNoteService';
import * as cards from '../services/cardService';

const JWT_KEY = process.env.JWT_KEY || '';

export function validateToken(token: string, message: string) {
  let result : { userId: number } | undefined;
  jwt.verify(token, JWT_KEY, function(err, decoded) {
    if (err) {
      throw throwError.unauthorized(message);
    } else {
      result = decoded as { userId: number };
    }
  });
  return result?.userId;
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

export async function findAllDataByUserId(userId: number) {
  if(isNaN(userId)) {
    throw throwError.unauthorized('Invalid user');
  }
  const totalCredentials = await credentials.totalByUserId(userId);
  const totalSafeNotes = await safeNotes.totalByUserId(userId);
  const totalCards = await cards.totalByUserId(userId);
  return {
    userId,
    totalCredentials,
    totalCards,
    totalNetworks: 0,
    totalSafeNotes
  }
}
