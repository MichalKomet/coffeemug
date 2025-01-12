import Product from '../../models/productModel.js';
import Order from '../../models/orderModel.js';
import {ObjectId} from "mongodb";

export const createOrderCommand = async (customerId, products) => {
    try {
        const orderItems = [];

        for (const item of products) {
            const { productId, quantity } = item;

            const product = await Product.findById(new ObjectId(productId));

            if (!product) {
                throw new Error(`Product ${productId} not found`);
            }

            if (product.stock < quantity) {
                throw new Error(`Insufficient stock for ${productId}`);
            }

            product.stock -= quantity;
            await product.save();

            orderItems.push({
                product: productId,
                quantity
            });
        }
        const newOrder = new Order({
            customerId,
            orderItems
        });

        return newOrder.save();
    } catch (e) {
        throw e;
    }
};