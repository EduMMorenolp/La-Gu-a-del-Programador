// swagger/v1/components/schemas/UserInput.js
const UserInput = {
    type: 'object',
    required: ['nombre_usuario', 'email', 'contrasena'],
    properties: {
        nombre_usuario: {
            type: 'string',
            description: 'Nombre del usuario'
        },
        email: {
            type: 'string',
            description: 'Correo electrónico del usuario'
        },
        contrasena: {
            type: 'string',
            description: 'Contraseña del usuario'
        }
    }
};

export default UserInput;