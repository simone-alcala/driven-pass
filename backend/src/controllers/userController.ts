import { Request, Response } from 'express';

import { findAllDataByUserId } from '../services/userService';

export async function getAllTotalsUserId (req: Request, res: Response) {
  const userId = res.locals.loggedUserId as number;
  const result = await findAllDataByUserId(Number(userId));
  res.status(200).send(result);
}