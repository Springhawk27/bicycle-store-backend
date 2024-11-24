import { TOrder } from './order.interface';
import { Order } from './order.model';
import { Product } from '../product/product.model';

// Create Order Service
const createOrderIntoDB = async (orderData: TOrder) => {
  const { product, quantity } = orderData;

  // Check if product exists
  const isProductExists = await Product.findById(product);
  if (!isProductExists) {
    throw new Error('Product not found');
  }

  // Check stock availability
  if (isProductExists.quantity < quantity) {
    throw new Error('Insufficient stock');
  }

  // Deduct quantity from product stock
  isProductExists.quantity -= quantity;
  await isProductExists.save();

  // Calculate total price
  orderData.totalPrice = quantity * isProductExists.price;

  // Create the order
  const order = await Order.create(orderData);
  return order;
};

// calculate total revenue service
const calculateTotalRevenue = async () => {
  const result = await Order.aggregate([
    {
      $lookup: {
        from: 'products',
        localField: 'product',
        foreignField: '_id',
        as: 'productDetails',
      },
    },
    {
      $unwind: '$productDetails',
    },
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: { $multiply: ['$quantity', '$productDetails.price'] },
        },
      },
    },
  ]);

  // Extract revenue from aggregation result
  return result[0]?.totalRevenue || 0;
};

export const OrderServices = {
  createOrderIntoDB,
  calculateTotalRevenue,
};
