const updateUser = {
    summary: 'Actualiza un usuario',
    description: 'Este endpoint permite actualizar los detalles de un usuario en el sistema.',
    tags: ['User'],
    security: [
        {
            bearerAuth: []
        }
    ],
    parameters: [
        {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'ID del usuario a actualizar',
            schema: {
                type: 'string'
            }
        }
    ],
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
        200: {
            description: 'Usuario actualizado exitosamente',
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
        404: {
            description: 'Usuario no encontrado'
        },
        500: {
            description: 'Error del servidor'
        }
    }
};

export default updateUser;
