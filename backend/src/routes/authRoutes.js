import express from 'express';
import { login, logout } from '../controllers/authController.js'; // Asegúrate de que el path sea correcto

const router = express.Router();

// Ruta para el login
router.post('/login', login);

// Ruta para el logout
router.post('/logout', logout);

export default router;
