import { TProduct } from './product.interface';
import { Product } from './product.model';

// create product service
const createProductIntoDB = async (productData: TProduct) => {
  if (await Product.isProductExists(productData.id)) {
    throw new Error('Product already exists!');
  }
  const result = await Product.create(productData);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
};
