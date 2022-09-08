import { Request, Response, NextFunction } from 'express';

import { unauthorized } from './../utils/errorUtils.js';
import { validateToken as isValidToken } from './../services/usersService';

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
  const errorMessage = 'Invalid token';
  const token = req.headers['authorization'] as string;
  if (!token) {
    throw unauthorized(errorMessage);
  }
  const userId = isValidToken(token.split('Bearer ').join(''), errorMessage);
  res.locals.loggedUserId = userId;
  next();  
}