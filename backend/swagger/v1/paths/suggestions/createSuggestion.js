const createSuggestion = {
    summary: 'Crea una nueva sugerencia',
    description: 'Este endpoint permite a los usuarios enviar sugerencias de contenido.',
    tags: ['Suggestion'],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/SuggestionInput'
                }
            }
        }
    },
    responses: {
        201: {
            description: 'Sugerencia creada exitosamente',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Suggestion'
                    }
                }
            }
        },
        500: {
            description: 'Error del servidor'
        }
    }
};

export default createSuggestion;
