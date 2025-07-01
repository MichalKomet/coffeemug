import { validationResult } from 'express-validator';
import { ValidationError } from "../errors/ValidationError.js";

export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ValidationError(errors.array())
    }
    next();
};