// swagger/v1/components/schemas/video/VideoUpdateInput.js

const VideoUpdateInput = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            description: 'Nuevo título del video'
        },
        description: {
            type: 'string',
            description: 'Nueva descripción del video'
        },
        url: {
            type: 'string',
            description: 'Nueva URL del video'
        }
    },
    required: ['title', 'url']
};

export default VideoUpdateInput;
