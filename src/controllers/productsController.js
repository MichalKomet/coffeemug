import { getAllProductsQuery } from "../queries/products/getAllProductsQuery.js";
import { createProductCommand } from "../commands/products/createProductCommand.js";
import {
    decreaseProductStockLevelCommand,
    increaseProductStockLevelCommand
} from "../commands/products/updateStockCommand.js";

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

export const restockProduct = async (req, res, next) => {
  try {
      const productId = req.params.id;
      const { amount } = req.body;

      const updatedProduct = await increaseProductStockLevelCommand(productId, amount);

      return res.json(updatedProduct);
  } catch (e) {
      next(e);
  }
};

export const sellProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const { amount } = req.body;

        const updatedProduct = await decreaseProductStockLevelCommand(productId, amount);

        return res.json(updatedProduct);
    } catch (e) {
        next(e);
    }
};