import { NextFunction, Request, Response } from 'express';

import { AppError, isAppError } from './../utils/errorUtils.js';

export default function errorHandler(error: AppError | any, req: Request, res: Response, next: NextFunction) {

  console.log('ERROR');
  console.log(`Type: ${error.constructor.name}`);
  console.log(`Path: ${req.path}`);
  console.log(`Status code: ${error.statusCode || 500}`)
  console.log(`Message: ${error.message}`);
  console.log(`Stack: ${error.stack}`);

  if (isAppError(error)) {
    return res.status(error.statusCode).send(error.message);
  }

  return res.status(500);
}