const createUser = {
    summary: 'Crea un nuevo usuario',
    description: 'Este endpoint permite crear un nuevo usuario en el sistema.',
    tags: ['User'],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/UserInput'
                }
            }
        }
    },
    responses: {
        201: {
            description: 'Usuario creado exitosamente',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/User'
                    }
                }
            }
        },
        400: {
            description: 'Solicitud incorrecta'
        },
        500: {
            description: 'Error del servidor'
        }
    }
};

export default createUser;
