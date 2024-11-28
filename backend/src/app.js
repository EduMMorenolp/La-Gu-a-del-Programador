// src/app.js

import express from 'express';

// Routes
import homeRoutes from './routes/home.Routes.js';

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.get('/', homeRoutes);


export default app;