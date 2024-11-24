import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// create product endpoint
router.post('/', ProductControllers.createProduct);

// get single product endpoint
router.get('/:productId', ProductControllers.getSingleProduct);

// update product endpoint
router.put('/:productId', ProductControllers.updateProduct);

// delete product endpoint
router.delete('/:productId', ProductControllers.deleteProduct);

// get all products endpoint
router.get('/', ProductControllers.getAllProduct);

export const ProductRoutes = router;
