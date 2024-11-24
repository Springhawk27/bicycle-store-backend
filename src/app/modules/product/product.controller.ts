/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ProductServices } from './product.service';

// create product controller
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const result = await ProductServices.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'Bicycle created succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

// get all products controller
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: 'Bicycles  retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

// get single product controller
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Bicycle retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

// update product controller
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;

    const result = await ProductServices.updateProductFromDB(
      productId,
      updatedData,
    );

    res.status(200).json({
      success: true,
      message: 'Bicycle updated succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

// delete product controller
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Bicycle deleted succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
