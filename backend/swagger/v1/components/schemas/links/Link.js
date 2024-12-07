const Link = {
    type: 'object',
    properties: {
        id_link: { type: 'integer', example: 1 },
        titulo: { type: 'string', example: 'Mi enlace interesante' },
        descripcion: { type: 'string', example: 'Un enlace útil para aprender algo nuevo.' },
        id_categoria: { type: 'integer', example: 3 },
        url: { type: 'string', example: 'https://mi-enlace.com' }
    }
};

export default Link;
