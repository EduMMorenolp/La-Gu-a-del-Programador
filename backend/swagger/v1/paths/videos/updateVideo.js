const updateVideo = {
    summary: 'Actualiza un video por ID',
    description: 'Este endpoint permite actualizar los detalles de un video basado en su ID.',
    tags: ['Videos'],
    parameters: [
        {
            name: 'videoId',
            in: 'path',
            description: 'ID del video a actualizar',
            required: true,
            schema: {
                type: 'integer',
                example: 4
            }
        }
    ],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/VideoUpdateInput'
                },
                example: {
                    titulo: "Actualización de título",
                    descripcion: "Descripción actualizada del video.",
                    id_categoria: 2,
                    url: "https://mi-servidor.com/videos/actualizacion-titulo"
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
                        $ref: '#/components/schemas/Video'
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
