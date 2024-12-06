// swagger/v1/components/schemas/video/Video.js

const Video = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'ID único del video'
        },
        title: {
            type: 'string',
            description: 'Título del video'
        },
        description: {
            type: 'string',
            description: 'Descripción del video'
        },
        url: {
            type: 'string',
            description: 'URL del video'
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha de creación del video'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha de la última actualización del video'
        }
    },
    required: ['id', 'title', 'url']
};

export default Video;
