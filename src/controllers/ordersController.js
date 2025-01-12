import { createOrderCommand } from "../commands/orders/createOrderCommand.js";

export const createOrder = async (req, res, next) => {
  try {
      const { customerId, products } = req.body;
      const newOrder = await createOrderCommand(customerId, products);
      return res.status(201).json(newOrder);
  } catch (e) {
      next(e);
  }
};