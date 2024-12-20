const updateLink = {
    summary: 'Actualiza un link por ID',
    description: 'Permite actualizar un link específico en la base de datos.',
    tags: ['Links'], 
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            name: 'linkId',
            in: 'path',
            description: 'ID del link a actualizar',
            required: true,
            schema: {
                type: 'integer',
                example: 3
            }
        }
    ],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/LinkInput'
                },
                example: {
                    titulo: "Título actualizado",
                    descripcion: "Descripción actualizada del link.",
                    id_categoria: 2,
                    url: "https://mi-enlace-actualizado.com"
                }
            }
        }
    },
    responses: {
        200: {
            description: 'Link actualizado exitosamente',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Link'
                    }
                }
            }
        },
        400: {
            description: 'Solicitud incorrecta o conflicto de datos'
        },
        404: {
            description: 'Link no encontrado'
        },
        500: {
            description: 'Error interno del servidor'
        }
    }
};

export default updateLink;
