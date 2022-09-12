import { Router } from 'express';

import authRouter from './authRouter';
import userRouter from './userRouter';
import credentialRouter from './credentialRouter';
import safeNoteRouter from './safeNoteRouter';
import cardRouter from './cardRouter';

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(credentialRouter);
router.use(safeNoteRouter);
router.use(cardRouter);

export default router;