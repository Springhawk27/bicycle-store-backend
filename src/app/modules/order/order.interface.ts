import { Model, Types } from 'mongoose';
import { TProduct } from '../product/product.interface';

export type TOrder = {
  email: string;
  product: Types.ObjectId | TProduct;
  quantity: number;
  totalPrice: number;
};

export type OrderModel = Model<TOrder>;
