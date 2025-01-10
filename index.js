import express from 'express';
import { connectToDB } from './mongoConnection.js';
import productsRoutes from "./src/routes/productsRoutes.js";

const app = express();
app.use(express.json());

const SERVER_PORT = process.env.SERVER_PORT;

app.use('/products', productsRoutes);

connectToDB().then(() => {
    app.listen(SERVER_PORT, () => {
        console.log(`App listening on port ${SERVER_PORT}`);
    });
});