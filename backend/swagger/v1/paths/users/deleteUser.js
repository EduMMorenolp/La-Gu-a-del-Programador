const deleteUser = {
    summary: 'Elimina un usuario',
    description: 'Este endpoint permite eliminar un usuario del sistema.',
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
            description: 'ID del usuario a eliminar',
            schema: {
                type: 'string'
            }
        }
    ],
    responses: {
        200: {
            description: 'Usuario eliminado exitosamente'
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

export default deleteUser;
