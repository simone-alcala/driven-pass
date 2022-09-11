import Joi from 'joi';

import { RequestCredentialData } from '../types/credentialType';

export const credential = Joi.object<RequestCredentialData>({
  title: Joi.string().trim().required(),
  url: Joi.string().trim().uri().required(),
  username: Joi.string().trim().required(),
  password: Joi.string().required()
});