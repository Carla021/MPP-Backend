import express from 'express';
import cors from 'cors';
import monitorRouters from './routers/monitorRouters';

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', monitorRouters);

module.exports = app;



