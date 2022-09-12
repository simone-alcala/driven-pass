import Joi from 'joi';

import { RequestNetworkData } from '../types/networkTypes';

export const network = Joi.object<RequestNetworkData>({
  title: Joi.string().trim().required(),
  name: Joi.string().trim().required(),
  password: Joi.string().trim().required()
});