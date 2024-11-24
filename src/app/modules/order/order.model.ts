import { Schema, model } from 'mongoose';
import { TOrder, OrderModel } from './order.interface';
import { Product } from '../product/product.model';

const orderSchema = new Schema<TOrder, OrderModel>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator: function (email: string) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        },
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product reference is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total Price is required'],
      min: [0, 'Total Price must be non-negative'],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

// Middleware to calculate totalPrice before saving
orderSchema.pre('save', async function (next) {
  const product = await Product.findById(this.product);
  if (!product) {
    throw new Error('Product not found');
  }
  if (product?.quantity < this.quantity) {
    throw new Error('Bicycle is stocked out');
  }
  this.totalPrice = this.quantity * product?.price;
  next();
});

// Order Model
export const Order = model<TOrder, OrderModel>('Order', orderSchema);
