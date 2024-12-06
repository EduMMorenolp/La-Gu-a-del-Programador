// swagger/v1/paths/videos/updateVideo.js

const updateVideo = {
    summary: 'Actualiza un video por ID',
    description: 'Este endpoint permite actualizar los detalles de un video basado en su ID.',
    parameters: [
        {
            name: 'videoId',
            in: 'path',
            description: 'ID del video a actualizar',
            required: true,
            schema: {
                type: 'string'
            }
        }
    ],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/video/VideoUpdateInput'
                }
            }
        }
    },
    responses: {
        200: {
            description: 'Video actualizado exitosamente',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/video/Video'
                    }
                }
            }
        },
        400: {
            description: 'Solicitud incorrecta'
        },
        404: {
            description: 'Video no encontrado'
        }
    }
};

export default updateVideo;
