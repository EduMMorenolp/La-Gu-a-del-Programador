// src/app.js

import express from 'express';
import setupSwaggerV1 from '../swagger/v1/main.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { responseFormatter } from './middlewares/responseFormatter.js';
import homeRoutes from './routes/home.Routes.js';
import linksRoutes from './routes/linksRoutes.js';
import videosRoutes from './routes/videosRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import suggestionsRoutes from './routes/suggestionsRoutes.js'
import authRoutes from './routes/authRoutes.js';

const app = express();

// Configura Swagger UI
setupSwaggerV1(app);

// Middlewares
app.use(express.json());
app.use(responseFormatter);

// Rutas
app.use('/api/v1/resources/videos', videosRoutes);
app.use('/api/v1/resources/links', linksRoutes);
app.use('/', homeRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/resources/suggestions', suggestionsRoutes);

// Rutas de autenticación
app.use('/api/v1/auth', authRoutes);


// Middleware de manejo de errores (debe ir despues de las rutas)
app.use(errorHandler);

export default app;
