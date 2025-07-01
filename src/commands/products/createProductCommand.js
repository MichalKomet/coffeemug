import Product from '../../models/productModel.js';

export const createProductCommand = async ({
   name,
   description,
   price,
   stock
}) => {
    const product = new Product({
        name,
        description,
        price,
        stock
    });
    return product.save();
};