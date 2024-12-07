export const getAllLinks = {
    summary: 'Obtiene todos los links',
    description: 'Este endpoint devuelve todos los links registrados.',
    tags: ['Links'], 
    responses: {
        200: {
            description: 'Lista de links',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Link'
                        }
                    }
                }
            }
        }
    }
};

export default getAllLinks;
