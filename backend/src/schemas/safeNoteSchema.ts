import Joi from 'joi';

import { RequestSafeNoteData } from '../types/safeNoteTypes';

export const safeNote = Joi.object<RequestSafeNoteData>({
  title: Joi.string().trim().required(),
  note: Joi.string().trim().required()
});