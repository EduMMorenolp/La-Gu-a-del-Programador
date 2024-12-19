// swagger/paths/auth/login.js

const login = {
    summary: 'Inicia sesión con credenciales de usuario',
    description: 'Este endpoint permite a un usuario iniciar sesión en la aplicación usando su email y contraseña.',
    tags: ['Auth'],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'Correo electrónico del usuario.'
                        },
                        contrasena: {
                            type: 'string',
                            description: 'Contraseña del usuario.'
                        }
                    },
                    required: ['email', 'contrasena']
                }
            }
        }
    },
    responses: {
        200: {
            description: 'Inicio de sesión exitoso',
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
                                example: 'Inicio de sesión exitoso'
                            },
                            token: {
                                type: 'string',
                                description: 'Token JWT para la sesión'
                            },
                            user: {
                                type: 'object',
                                properties: {
                                    id_usuario: {
                                        type: 'integer',
                                        example: 1
                                    },
                                    nombre_usuario: {
                                        type: 'string',
                                        example: 'John Doe'
                                    },
                                    email: {
                                        type: 'string',
                                        example: 'john.doe@example.com'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        401: {
            description: 'Credenciales inválidas'
        },
        500: {
            description: 'Error del servidor'
        }
    }
};

export default login;
