import express from 'express';

const app = express();

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => console.log(`server is listening on port ${SERVER_PORT}`));