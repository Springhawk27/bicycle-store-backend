import { TProduct } from './product.interface';
import { Product } from './product.model';

// create product service
const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

// get all products service
const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

// get single product service
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.aggregate([{ $match: { id } }]);
  return result;
};

// update product service
const updateProductFromDB = async (
  id: string,
  updatedData: Partial<TProduct>,
) => {
  const result = await Product.findOneAndUpdate({ id }, updatedData);
  return result;
};

// delete product service
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
