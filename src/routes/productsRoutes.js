import { Router } from 'express';
import { getAllProducts, createProduct, restockProduct, sellProduct } from "../controllers/productsController.js";
import { handleValidationErrors } from "../../validations/handleValidationErrors.js";
import {
    createProductValidationRules,
    updateProductStockLevelValidationRules
} from "../../validations/productValidation.js";

const router = Router();

router.get('/', getAllProducts);
router.post(
    '/',
    ...createProductValidationRules,
    handleValidationErrors,
    createProduct
);
router.post(
    '/:id/restock',
    ...updateProductStockLevelValidationRules,
    handleValidationErrors,
    restockProduct
);
router.post(
    '/:id/sell',
    ...updateProductStockLevelValidationRules,
    handleValidationErrors,
    sellProduct
);

export default router;