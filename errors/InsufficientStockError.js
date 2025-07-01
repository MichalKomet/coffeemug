export class InsufficientStockError extends Error {
    constructor(message = 'Insufficient stock') {
        super(message);
        this.statusCode = 409;
    }
}