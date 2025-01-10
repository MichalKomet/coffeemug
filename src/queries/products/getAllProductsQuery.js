import Product from '../../models/productModel.js';

export const getAllProductsQuery = async () => {
    const products = await Product.find({});
    return products;
};