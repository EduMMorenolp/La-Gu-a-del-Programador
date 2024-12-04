// src/app.js

import express from 'express';

// Routes
import homeRoutes from './routes/home.Routes.js';
import videosRoutes from './routes/videosRoutes.js';

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/v1/resources/videos', videosRoutes);
app.use('/home', homeRoutes);

export default app;
