import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';

import router from './routers/index';
import errorHandler from './middlewares/errorHandlerMiddleware';

const app = express();
app.use(cors({ origin: 'https://driven-pass-new.herokuapp.com'}));
app.use(json());
app.use(router);
app.use(errorHandler);

export default app;