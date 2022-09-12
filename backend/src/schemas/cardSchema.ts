import Joi from 'joi';

import { RequestCardData } from '../types/cardTypes';

export const card = Joi.object<RequestCardData>({
  title: Joi.string().trim().required(),
  number: Joi.string().creditCard().required(),
  holderName: Joi.string().trim().required(),
  securityCode: Joi.string().trim().required(),
  expirationDate: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
  virtual: Joi.boolean().required(),
  type: Joi.string().uppercase().valid('CREDIT', 'DEBIT', 'BOTH').required()
});