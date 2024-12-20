const getAllSuggestions = {
    summary: 'Obtiene todas las sugerencias',
    description: 'Este endpoint devuelve una lista de todas las sugerencias enviadas por los usuarios.',
    tags: ['Suggestion'],
    responses: {
        200: {
            description: 'Lista de sugerencias obtenida exitosamente',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Suggestion'
                        }
                    }
                }
            }
        },
        500: {
            description: 'Error del servidor'
        }
    }
};

export default getAllSuggestions;
