import Product from '../../models/productModel.js';
import { ObjectId } from 'mongodb';

export const decreaseProductStockLevelCommand = async (
    productId,
    amount
) => {
    const updatedProduct = await Product.findOneAndUpdate(
        { _id: new ObjectId(productId), stock: { $gte: amount } },
        { $inc: { stock: -amount } },
        { new: true }
    );
    if (!updatedProduct) {
        throw new Error('Insufficient stock or product not found');
    }
};

export const increaseProductStockLevelCommand = async (
    productId,
    amount
) => {
    const updatedProduct = await Product.findOneAndUpdate(
        new ObjectId(productId),
        { $inc: { stock: amount } },
        { new: true }
    );
    if (!updatedProduct) {
        throw new Error('Product not found');
    }
};