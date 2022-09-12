import { Router } from 'express';

import * as controller from './../controllers/networkController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from './../middlewares/validateSchemaMiddleware';
import { network } from '../schemas/networkSchema';

const networkRouter = Router();

networkRouter.post('/networks', validateToken, validateSchema(network), controller.insert);
networkRouter.get('/networks', validateToken, controller.getAll);
networkRouter.get('/networks/:id', validateToken, controller.getById);
networkRouter.delete('/networks/:id', validateToken, controller.deleteById);

export default networkRouter;