import { Router } from 'express';

import authRouter from './authRouter';
import credentialRouter from './credentialRouter';
import userRouter from './userRouter';

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(userRouter);

export default router;