import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        }
    }]
}, {
    timestamps: true
});

export default mongoose.model('Order', orderSchema);