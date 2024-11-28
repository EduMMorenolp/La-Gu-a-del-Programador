import express from 'express';
import corsMiddleware from './middlewares/corsMiddleware.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(corsMiddleware);

// Rutas
app.get('/', (req, res) => {
    res.send('Servidor en funcionamiento');
});


export default app;