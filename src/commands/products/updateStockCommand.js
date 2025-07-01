import Product from '../../models/productModel.js';
import { ObjectId } from 'mongodb';
import { NotFoundError } from "../../../errors/NotFoundError.js";
import { InsufficientStockError } from "../../../errors/InsufficientStockError.js";

export const decreaseProductStockLevelCommand = async (
    productId,
    amount
) => {
    const product = await Product.findById(new ObjectId(productId));

    if (!product) {
        throw new NotFoundError('Product not found');
    }

    if (product.stock < amount) {
        throw new InsufficientStockError('Insufficient stock');
    }

    product.stock -= amount;
    return product.save();
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
        throw new NotFoundError('Product not found');
    }

    return updatedProduct;
};