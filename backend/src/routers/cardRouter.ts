import { Router } from 'express';

import * as controller from './../controllers/cardController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from './../middlewares/validateSchemaMiddleware';
import { card } from '../schemas/cardSchema';

const cardRouter = Router();

cardRouter.post('/cards', validateToken, validateSchema(card), controller.insert);
cardRouter.get('/cards', validateToken, controller.getAll);
cardRouter.get('/cards/:id', validateToken, controller.getById);
cardRouter.delete('/cards/:id', validateToken, controller.deleteById);

export default cardRouter;