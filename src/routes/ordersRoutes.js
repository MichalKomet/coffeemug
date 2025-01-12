import { Router } from 'express';
import { createOrderValidationRules } from "../../validations/orderValidation.js";
import { handleValidationErrors } from "../../validations/handleValidationErrors.js";
import { createOrder } from "../controllers/ordersController.js";

const router = Router();

router.post(
    '/',
    ...createOrderValidationRules,
    handleValidationErrors,
    createOrder
);


export default router;