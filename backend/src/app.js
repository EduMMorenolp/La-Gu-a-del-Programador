import express from 'express';

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Servidor en funcionamiento');
});


export default app;