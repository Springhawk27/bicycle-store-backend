import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

// create order endpoint
router.post('/', OrderControllers.createOrder);

// calculate revenue endpoint
router.get('/revenue', OrderControllers.calculateRevenue);

export const OrderRoutes = router;
