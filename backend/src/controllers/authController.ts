import { Request, Response} from 'express';

import * as userService from './../services/usersService.js';
import * as authService from './../services/authService.js';

export async function signUp(req: Request, res: Response) {
  const { email, password }: userService.CreateUserData = req.body;
  await authService.SignUp({ email: email.toUpperCase(), password });
  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const { email, password }: userService.CreateUserData = req.body;
  const token = await authService.SignIn({ email: email.toUpperCase(), password });
  res.status(200).send(token);
}
