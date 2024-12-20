// swagger/paths/auth/logout.js

const logout = {
    summary: 'Cierra la sesión del usuario',
    description: 'Este endpoint permite cerrar la sesión de un usuario autenticado. No es necesario enviar ningún parámetro.',
    tags: ['Auth'],
    responses: {
        200: {
            description: 'Sesión cerrada exitosamente',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            success: {
                                type: 'boolean',
                                example: true
                            },
                            message: {
                                type: 'string',
                                example: 'Sesión cerrada exitosamente'
                            }
                        }
                    }
                }
            }
        },
        500: {
            description: 'Error del servidor'
        }
    }
};

export default logout;
