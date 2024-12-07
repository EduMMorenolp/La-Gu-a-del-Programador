// swagger/v1/paths/videos/getAllVideos.js

const getAllVideos = {
    summary: 'Obtiene todos los videos',
    description: 'Este endpoint devuelve todos los videos disponibles en la base de datos.',
    responses: {
        200: {
            description: 'Lista de videos',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Video'
                        }
                    }
                }
            }
        }
    }
};

export default getAllVideos;
