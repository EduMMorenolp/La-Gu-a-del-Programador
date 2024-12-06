// src/app.js

import express from 'express';

// Swagger
import setupSwaggerV1 from '../swagger/v1/main.js';

// Routes
import homeRoutes from './routes/home.Routes.js';
import linksRoutes from './routes/linksRoutes.js';
import videosRoutes from './routes/videosRoutes.js';

const app = express();

// Configura Swagger UI
setupSwaggerV1(app);

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/v1/resources/videos', videosRoutes);
app.use('/api/v1/resources/links', linksRoutes);
app.use('/', homeRoutes);

export default app;
