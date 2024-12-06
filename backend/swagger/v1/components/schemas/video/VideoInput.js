// swagger/v1/components/schemas/video/VideoInput.js

const VideoInput = {
    type: 'object',
    properties: {
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
        }
    },
    required: ['title', 'url']
};

export default VideoInput;
