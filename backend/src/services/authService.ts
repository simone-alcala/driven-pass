import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

import * as service from './usersService.js';
import * as repository from './../repositories/usersRepository.js';
import * as throwError from './../utils/errorUtils.js';

const SALTROUNDS =+process.env.BCRYPT || 10;
const JWT_EXPIRATION = 60*60*24;
const JWT_KEY = process.env.JWT_KEY;

export async function SignUp(userData: service.CreateUserData) {
  await service.findUserAndFail(userData.email);
  const data = { ...userData, password: getEncryptedPassword(userData.password) };
  return await repository.insert(data);
}

export async function SignIn(userData: service.CreateUserData) {
  const errorMessage = 'Invalid user/password';
  const user = await service.findUserOrFail(userData.email, null, errorMessage);
  validPasswordOrFail(userData.password, user.password, errorMessage);
  return { token: getToken(user.id) };
}

function getEncryptedPassword(password: string) {
  return bcrypt.hashSync(password, SALTROUNDS);
}

function validPasswordOrFail(password: string, hashedPassword: string, message: string) {
  const match = bcrypt.compareSync(password, hashedPassword);
  if (!match) {
    throw throwError.notFound(message);
  }
}

function getToken(id: number) {
  return jwt.sign({ userId: id }, JWT_KEY, { expiresIn: JWT_EXPIRATION });
}