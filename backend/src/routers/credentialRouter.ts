import { Router } from 'express';

import * as controller from './../controllers/credentialController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from './../middlewares/validateSchemaMiddleware';
import { credential } from '../schemas/credentialSchema';

const credentialRouter = Router();

credentialRouter.post('/credentials', validateToken, validateSchema(credential), controller.insert);
credentialRouter.get('/credentials', validateToken, controller.getAll);
credentialRouter.get('/credentials/:id', validateToken, controller.getById);
credentialRouter.delete('/credentials/:id', validateToken, controller.deleteById);

export default credentialRouter;