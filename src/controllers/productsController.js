import { getAllProductsQuery } from "../queries/products/getAllProductsQuery.js";
import { createProductCommand } from "../commands/products/createProductCommand.js";

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await getAllProductsQuery();
        return res.json(products);
    } catch (e) {
        next(e);
    }
};

export const createProduct = async (req, res, next) => {
  try {
      const { name, description, price, stock } = req.body;
      const newProduct = await createProductCommand({
          name,
          description,
          price,
          stock
      });
      return res.status(201).json(newProduct);
  } catch (e) {
      next(e);
  }
};