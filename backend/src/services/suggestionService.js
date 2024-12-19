import * as suggestionModel from '../models/suggestionModel.js';

/**
 * Obtiene todas las sugerencias.
 * @returns {Array} Lista de sugerencias.
 */
export const getAllSuggestions = async () => {
    return await suggestionModel.getAllSuggestions();
};

/**
 * Crea una nueva sugerencia.
 * @param {Object} suggestion - Datos de la sugerencia (titulo, descripcion, id_usuario).
 * @returns {Object} Sugerencia creada.
 */
export const createSuggestion = async (suggestion) => {
    const newSuggestion = await suggestionModel.createSuggestion(suggestion);
    return { ...newSuggestion, ...suggestion };
};
