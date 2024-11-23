import { Model } from 'mongoose';

export type TProduct = {
  id: string;
  name: string;
  brand: string;
  price: number;
  type?: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
};

export interface ProductModel extends Model<TProduct> {
  // eslint-disable-next-line no-unused-vars
  isProductExists(id: string): Promise<TProduct | null>;
}
