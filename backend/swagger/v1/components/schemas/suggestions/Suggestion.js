// swagger/v1/components/schemas/Suggestion.js
const Suggestion = {
    type: 'object',
    properties: {
        id_sugerencia: {
            type: 'integer',
            description: 'ID de la sugerencia'
        },
        titulo: {
            type: 'string',
            description: 'Título de la sugerencia'
        },
        descripcion: {
            type: 'string',
            description: 'Descripción de la sugerencia'
        },
        id_usuario: {
            type: 'integer',
            description: 'ID del usuario que envió la sugerencia'
        },
        fecha_envio: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha de envío de la sugerencia'
        }
    }
};

export default Suggestion;