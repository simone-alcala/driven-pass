import Joi from 'joi';

import { CreateUserData } from '../types/userType';

export const user = Joi.object<CreateUserData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required()
});