/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderServices } from './order.service';

// Create Order Controller
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const result = await OrderServices.createOrderIntoDB(orderData);

    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      message: err.message || 'Something went wrong',
      success: false,
      error: err,
    });
  }
};

// calculate total revenue Controller
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderServices.calculateTotalRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (err: any) {
    res.status(500).json({
      message: err.message || 'Something went wrong',
      status: false,
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  calculateRevenue,
};
