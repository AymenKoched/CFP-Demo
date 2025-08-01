import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { errorHandler } from './middlewares';
import { appRouter, taskRouter } from './routes';

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use('/api', appRouter);
app.use('/api/tasks', taskRouter);

app.use(errorHandler);

export default app;
