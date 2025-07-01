import Product from '../../models/productModel.js';
import Order from '../../models/orderModel.js';
import { ObjectId } from "mongodb";
import { NotFoundError } from "../../../errors/NotFoundError.js";
import { InsufficientStockError } from "../../../errors/InsufficientStockError.js";

export const createOrderCommand = async (customerId, products) => {
    try {
        const orderItems = [];

        for (const item of products) {
            const { productId, quantity } = item;

            const product = await Product.findById(new ObjectId(productId));

            if (!product) {
                throw new NotFoundError(`Product ${productId} not found`);
            }

            if (product.stock < quantity) {
                throw new InsufficientStockError(`Insufficient stock for ${productId}`);
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
            products: orderItems
        });

        return newOrder.save();
    } catch (e) {
        throw e;
    }
};