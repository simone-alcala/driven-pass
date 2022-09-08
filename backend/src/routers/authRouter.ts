import { Router } from 'express';

import validateSchema from './../middlewares/validateSchemaMiddleware.js';
import { user } from './../schemas/usersSchema.js';
import * as controller from './../controllers/authController.js';

const authRouter = Router();

authRouter.post('/sign-up', validateSchema(user), controller.signUp);
authRouter.post('/sign-in', validateSchema(user), controller.signIn);

export default authRouter;