import { Router } from 'express';

import * as controller from './../controllers/safeNoteController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from './../middlewares/validateSchemaMiddleware';
import { safeNote } from '../schemas/safeNoteSchema';

const safeNoteRouter = Router();

safeNoteRouter.post('/safenotes', validateToken, validateSchema(safeNote), controller.insert);
safeNoteRouter.get('/safenotes', validateToken, controller.getAll);
safeNoteRouter.get('/safenotes/:id', validateToken, controller.getById);
safeNoteRouter.delete('/safenotes/:id', validateToken, controller.deleteById);

export default safeNoteRouter;