import { Model } from 'mongoose';

// product type
export type TProduct = {
  name: string;
  brand: string;
  price: number;
  type?: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
};

export type ProductModel = Model<TProduct>;
