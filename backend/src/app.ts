import express, { Request, Response } from 'express';
import deliveryRoutes from './routes/deliveryRoutes';


const app = express();


app.use(express.json());


app.use('/delivery', deliveryRoutes);


export default app;