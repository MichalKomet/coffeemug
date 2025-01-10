import mongoose from 'mongoose';

const DATABASE_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const DATABASE_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
const DATABASE_DB = process.env.MONGO_INITDB_DATABASE;

const URI = `mongodb://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@mongo:27017/${DATABASE_DB}?authSource=admin`;

export const connectToDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database');
    } catch (error) {
        console.error('Something went wrong', error);
        process.exit(1);
    }
};