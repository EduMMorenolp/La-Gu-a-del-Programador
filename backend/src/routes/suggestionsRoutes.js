import express from 'express';
import * as suggestionsController from '../controllers/suggestionsController.js';

const router = express.Router();

// Rutas para sugerencias
router.get('/', suggestionsController.getAllSuggestions); 
router.post('/', suggestionsController.createSuggestion); 

export default router;
