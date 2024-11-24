import cors from 'cors';
import express, { Application } from 'express';
import { ProductRoutes } from './app/modules/product/product.routes';
import { OrderRoutes } from './app/modules/order/order.routes';
const app: Application = express();
// const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;
