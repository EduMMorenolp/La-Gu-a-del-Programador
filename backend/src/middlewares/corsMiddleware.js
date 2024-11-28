// middlewares/corsMiddleware.js
import cors from 'cors';

const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? process.env.CORS_ALLOWED_ORIGINS
        : '*', // Permitir todo en desarrollo
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;