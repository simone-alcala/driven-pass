import { Router } from 'express';

import authRouter from './authRouter';
import userRouter from './userRouter';
import credentialRouter from './credentialRouter';
import safeNoteRouter from './safeNoteRouter';

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(userRouter);
router.use(safeNoteRouter);

export default router;