import Joi from 'joi';

import { RequestSafeNoteData } from '../types/safeNoteTypes';

export const safeNote = Joi.object<RequestSafeNoteData>({
  title: Joi.string().trim().max(50).required(),
  note: Joi.string().trim().max(1000).required()
});