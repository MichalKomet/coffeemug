import { body } from 'express-validator';

export const createProductValidationRules = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ max: 50 }).withMessage('Name cannot exceed 50 characters'),

    body('description')
        .notEmpty().withMessage('Description is required')
        .isLength({ max: 50 }).withMessage('Description cannot exceed 50 characters'),

    body('price')
        .notEmpty().withMessage('Price is required')
        .isFloat({ gt: 0 }).withMessage('Price must be a number greater than 0'),

    body('stock')
        .notEmpty().withMessage('Stock is required')
        .isInt({ gt: -1 }).withMessage('Stock must be a non-negative integer')
];