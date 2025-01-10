import { Router } from 'express';
import { getAllProducts, createProduct } from "../controllers/productsController.js";
import { handleValidationErrors } from "../../validations/handleValidationErrors.js";
import { createProductValidationRules } from "../../validations/productValidation.js";

const router = Router();

router.get('/', getAllProducts);
router.post(
    '/',
    ...createProductValidationRules,
    handleValidationErrors,
    createProduct
)

export default router;