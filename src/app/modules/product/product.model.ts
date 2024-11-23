import { Schema, model } from 'mongoose';
import { ProductModel, TProduct } from './product.interface';

// product schema
const productSchema = new Schema<TProduct, ProductModel>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message: '{VALUE} is not a valid type of bicycle',
      },
    },
    description: {
      type: String,
      required: [true, 'Description number is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'In Stock is required'],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

//custom static method
productSchema.statics.isProductExists = async function (id: string) {
  const existingUser = await Product.findOne({ id });
  return existingUser;
};

// product Model
export const Product = model<TProduct, ProductModel>('Product', productSchema);
