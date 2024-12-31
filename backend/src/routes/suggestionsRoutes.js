import express from 'express';
import * as suggestionsController from '../controllers/suggestionsController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para sugerencias
router.get('/', suggestionsController.getAllSuggestions);
router.post('/', authenticateToken, suggestionsController.createSuggestion);

export default router;
