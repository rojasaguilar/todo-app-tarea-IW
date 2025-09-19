import express from 'express';
import morgan from 'morgan';
import config from './config.js';
import cors from 'cors'

import taskRouter from './routes/taskRoutes.js';

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json())
app.use(morgan('dev'));
app.use(`${config.BASE_URL}/tasks`, taskRouter);

export default app;
