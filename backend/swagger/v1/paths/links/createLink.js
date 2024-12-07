const createLink = {
    summary: 'Crea un nuevo link',
    description: 'Permite crear un nuevo link en la base de datos.',
    tags: ['Links'], 
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/LinkInput'
                },
                example: {
                    titulo: "Mi enlace interesante",
                    descripcion: "Un enlace útil para aprender algo nuevo.",
                    id_categoria: 3,
                    url: "https://mi-enlace.com"
                }
            }
        }
    },
    responses: {
        201: {
            description: 'Link creado exitosamente',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Link'
                    }
                }
            }
        },
        400: {
            description: 'Solicitud incorrecta o conflicto de datos'
        },
        500: {
            description: 'Error interno del servidor'
        }
    }
};

export default createLink;
