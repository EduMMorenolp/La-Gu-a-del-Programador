// swagger/v1/paths/videos/createVideo.js

const createVideo = {
    summary: 'Crea un nuevo video',
    description: 'Este endpoint permite crear un nuevo video en la base de datos.',
    tags: ['Videos'],
    security: [
        {
            bearerAuth: []
        }
    ],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/VideoInput'
                },
                example: {
                    titulo: "String",
                    descripcion: "String",
                    id_categoria: 4,
                    url: "String"
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
                        $ref: '#/components/schemas/Video'
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
