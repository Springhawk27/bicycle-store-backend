import { TOrder } from './order.interface';
import { Order } from './order.model';
import { Product } from '../product/product.model';

// Create Order Service
const createOrderIntoDB = async (orderData: TOrder) => {
  const { product, quantity } = orderData;

  // Check if product exists
  const foundProduct = await Product.findById(product);
  if (!foundProduct) {
    throw new Error('Product not found');
  }

  // Check stock availability
  if (foundProduct.quantity < quantity) {
    throw new Error('Insufficient stock');
  }

  // Deduct quantity from product stock
  foundProduct.quantity -= quantity;
  await foundProduct.save();

  // Calculate total price
  orderData.totalPrice = quantity * foundProduct.price;

  // Create the order
  const order = (await Order.create(orderData)).populate('product');
  return order;
};

export const OrderServices = {
  createOrderIntoDB,
};
