// swagger/v1/components/schemas/SuggestionInput.js
const SuggestionInput = {
    type: 'object',
    required: ['titulo', 'descripcion'],
    properties: {
        titulo: {
            type: 'string',
            description: 'Título de la sugerencia'
        },
        descripcion: {
            type: 'string',
            description: 'Descripción de la sugerencia'
        }
    }
};

export default SuggestionInput;

