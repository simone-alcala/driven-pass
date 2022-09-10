import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';

import router from './routers/index';
import errorHandler from './middlewares/errorHandlerMiddleware';

const app = express();
//app.use(cors());
app.use(cors( { origin: 'https://driven-pass.vercel.app' } ));
//app.options('*', cors());
app.use(json());
app.use(router);
app.use(errorHandler);

export default app;