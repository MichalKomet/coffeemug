import { body } from 'express-validator';

export const createOrderValidationRules = [
    body('customerId')
        .notEmpty().withMessage('Customer id is required')
        .isString().withMessage('Customer id is not valid'),

    body('products')
        .isArray({ min: 1 }).withMessage('Products array is required and cannot be empty'),

    body('products.*.productId')
        .notEmpty().withMessage('Product field is required')
        .isMongoId().withMessage('Product field must be valid MongoDB ObjectId'),

    body('products.*.quantity')
        .notEmpty().withMessage('Quantity field is required')
        .isInt({ min: 1 }).withMessage('Quantity must be a positive integer')

];