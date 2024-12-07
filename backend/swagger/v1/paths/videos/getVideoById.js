// swagger/v1/paths/videos/getVideoById.js

const getVideoById = {
    summary: 'Obtiene un video por ID',
    description: 'Este endpoint devuelve un video específico basándose en su ID.',
    parameters: [
        {
            name: 'videoId',
            in: 'path',
            description: 'ID del video',
            required: true,
            schema: {
                type: 'string'
            }
        }
    ],
    responses: {
        200: {
            description: 'Video encontrado',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Video'
                    }
                }
            }
        },
        404: {
            description: 'Video no encontrado'
        }
    }
};

export default getVideoById;
