const LinkInput = {
    type: 'object',
    properties: {
        titulo: { type: 'string', example: 'Título del link' },
        descripcion: { type: 'string', example: 'Descripción del link' },
        id_categoria: { type: 'integer', example: 2 },
        url: { type: 'string', example: 'https://mi-enlace.com' }
    },
    required: ['titulo', 'descripcion', 'id_categoria', 'url']
};

export default LinkInput;
