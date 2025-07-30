import express from 'express';
import { errorHandler } from './middlewares';
import { appRouter } from './routes';
import morgan from 'morgan';

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use('/api', appRouter);

app.use(errorHandler);

export default app;
