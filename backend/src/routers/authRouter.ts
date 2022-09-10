import { Router } from 'express';

import validateSchema from './../middlewares/validateSchemaMiddleware';
import { user } from '../schemas/userSchema';
import * as controller from './../controllers/authController';

const authRouter = Router();

authRouter.post('/sign-up', validateSchema(user), controller.signUp);
authRouter.post('/sign-in', validateSchema(user), controller.signIn);

export default authRouter;