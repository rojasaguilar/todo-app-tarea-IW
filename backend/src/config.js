import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT,
    BASE_URL: process.env.BASE_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
};
