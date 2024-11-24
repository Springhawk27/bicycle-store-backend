import { Types } from 'mongoose';
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
const getSingleProductFromDB = async (productId: string) => {
  const objectId = new Types.ObjectId(productId);
  const result = await Product.aggregate([{ $match: { _id: objectId } }]);
  return result;
};

// update product service
const updateProductFromDB = async (
  productId: string,
  updatedData: Partial<TProduct>,
) => {
  const result = await Product.findByIdAndUpdate(productId, updatedData, {
    new: true,
  });
  return result;
};

// delete product service
const deleteProductFromDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
