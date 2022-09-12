import { Request, Response } from 'express';

import { RequestNetworkData } from '../types/networkTypes';
import * as service from '../services/networkService';

export async function insert(req: Request, res: Response) {
  const userId = res.locals.loggedUserId as number;
  const { title, name, password } : RequestNetworkData = req.body;
  const result = await service.insert({ title, name, password, userId } ); 
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