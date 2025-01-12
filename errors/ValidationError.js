export class ValidationError extends Error {
    constructor(errors) {
        super('Validation failed');
        this.errors = errors;
        this.statusCode = 400;
    }
}