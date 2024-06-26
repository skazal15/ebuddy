import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from '../routes/userRoutes';
import { handleError } from '../middleware/errorHandler';

const app = express();

app.use(bodyParser.json());

app.use('/api', userRoutes);

app.use(handleError);

export default app;
