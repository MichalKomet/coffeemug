import { getAllProductsQuery } from "../queries/products/getAllProductsQuery.js";

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await getAllProductsQuery();
        return res.json(products);
    } catch (e) {
        next(e);
    }
}