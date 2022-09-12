import { Request, Response } from 'express';

import { findAllDataByUserId, validateToken} from '../services/userService';

export async function getAllTotalsUserId (req: Request, res: Response) {
  const userId = res.locals.loggedUserId as number;
  const result = await findAllDataByUserId(Number(userId));
  res.status(200).send(result);
}

export async function validToken (req: Request, res: Response) {
  const { token } = req.body;
  validateToken(token, '');
  res.sendStatus(200);
}