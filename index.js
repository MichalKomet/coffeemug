import express from 'express';
import { connectToDB } from './mongoConnection.js';
import productsRoutes from "./src/routes/productsRoutes.js";
import ordersRoutes from "./src/routes/ordersRoutes.js";

const app = express();
app.use(express.json());

const SERVER_PORT = process.env.SERVER_PORT;

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

app.use((err, req, res, next) => {
    console.error(err);

    if (err.statusCode) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            ...(err.errors && { errors: err.errors })
        });
    }

    res.status(500).json({
        success: false,
        message: 'Internal Server Error'
    });
});

connectToDB().then(() => {
    app.listen(SERVER_PORT, () => {
        console.log(`App listening on port ${SERVER_PORT}`);
    });
});