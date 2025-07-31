import express from 'express';
import morgan from 'morgan';

import { errorHandler } from './middlewares';
import { appRouter, taskRouter } from './routes';

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use('/api', appRouter);
app.use('/api/tasks', taskRouter);

app.use(errorHandler);

export default app;
