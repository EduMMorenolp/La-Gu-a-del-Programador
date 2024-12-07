const getLinkById = {
    summary: 'Obtiene un link por ID',
    description: 'Devuelve los detalles de un link específico por su ID.',
    tags: ['Links'], 
    parameters: [
        {
            name: 'linkId',
            in: 'path',
            description: 'ID del link a buscar',
            required: true,
            schema: {
                type: 'integer',
                example: 3
            }
        }
    ],
    responses: {
        200: {
            description: 'Detalles del link obtenidos exitosamente',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Link'
                    }
                }
            }
        },
        404: {
            description: 'Link no encontrado'
        },
        500: {
            description: 'Error interno del servidor'
        }
    }
};

export default getLinkById;
