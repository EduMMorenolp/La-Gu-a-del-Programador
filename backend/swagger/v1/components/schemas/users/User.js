// swagger/v1/components/schemas/User.js
const User = {
    type: 'object',
    properties: {
        id_usuario: {
            type: 'integer',
            description: 'ID del usuario'
        },
        nombre_usuario: {
            type: 'string',
            description: 'Nombre del usuario'
        },
        email: {
            type: 'string',
            description: 'Correo electrónico del usuario'
        },
        fecha_creacion: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha de creación del usuario'
        }
    }
};

export default User;