const deleteLink = {
    summary: 'Elimina un link por ID',
    description: 'Permite eliminar un link específico de la base de datos.',
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
            description: 'ID del link a eliminar',
            required: true,
            schema: {
                type: 'integer',
                example: 3
            }
        }
    ],
    responses: {
        200: {
            description: 'Link eliminado exitosamente'
        },
        404: {
            description: 'Link no encontrado'
        },
        500: {
            description: 'Error interno del servidor'
        }
    }
};

export default deleteLink;
