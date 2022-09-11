import { Router } from 'express';

import validateToken from '../middlewares/validateTokenMiddleware';
import * as controller from '../controllers/userController'

const userRouter = Router();

userRouter.get('/totals', validateToken, controller.getAllTotalsUserId);

export default userRouter;