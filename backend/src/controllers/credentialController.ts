import { Request, Response } from 'express';

import { RequestCredentialData } from '../types/credentialType';
import * as service from '../services/credentialService';

export async function insert(req: Request, res: Response) {
  const userId = res.locals.loggedUserId as number;
  const { title, url, username, password } : RequestCredentialData = req.body;
  const result = await service.insert({ title, url, username, password, userId } ); 
  res.status(201).send( { createdId: result.id });
}

export async function getAll(req: Request, res: Response) {
  const userId = res.locals.loggedUserId as number;
  const result = await service.getByUserId(userId);
  res.status(200).send(result);
}

export async function getById(req: Request, res: Response) {
  const userId = res.locals.loggedUserId as number;
  const { id } = req.params;
  const result = await service.getByIdAndUserId(Number(id), userId);
  res.status(200).send(result);
}

export async function deleteById(req: Request, res: Response) {
  const userId = res.locals.loggedUserId as number;
  const { id } = req.params;
  await service.deleteByIdAndUserId(Number(id), userId);
  res.sendStatus(200);
}