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

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.aggregate([{ $match: { id } }]);
  return result;
};

const updateProductFromDB = async (
  id: string,
  updatedData: Partial<TProduct>,
) => {
  const result = await Product.findOneAndUpdate({ id }, updatedData);
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
