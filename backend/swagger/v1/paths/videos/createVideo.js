// swagger/v1/paths/videos/createVideo.js

const createVideo = {
    summary: 'Crea un nuevo video',
    description: 'Este endpoint permite crear un nuevo video en la base de datos.',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/video/VideoInput'
                }
            }
        }
    },
    responses: {
        201: {
            description: 'Video creado exitosamente',
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
        }
    }
};

export default createVideo;
