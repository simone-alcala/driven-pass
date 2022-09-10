import { Request, Response} from 'express';

import * as types from '../types/userType';
import * as authService from './../services/authService';

export async function signUp(req: Request, res: Response) {
  const { email, password }: types.CreateUserData = req.body;
  await authService.SignUp({ email: email.toUpperCase(), password });
  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const { email, password }: types.CreateUserData = req.body;
  const token = await authService.SignIn({ email: email.toUpperCase(), password });
  res.status(200).send(token);
}
