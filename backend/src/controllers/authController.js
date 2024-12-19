import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userService from '../services/userService.js';

export const login = async (req, res) => {
    try {
        const { email, contrasena } = req.body;

        // Buscar al usuario por email
        const users = await userService.getUserByEmail(email);

        // Verificar que el usuario exista
        if (!users || users.length === 0) {
            return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
        }

        // Obtener el primer usuario en caso de que la consulta retorne un arreglo
        const user = users[0];

        console.log('Contraseña proporcionada:', contrasena);
        console.log('Hash de la contraseña del usuario:', user.contrasena);

        // Verificar la contraseña utilizando bcrypt
        const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);

        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
        }

        // Generar un token JWT
        const token = jwt.sign(
            { id_usuario: user.id_usuario, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION_TIME || '1h' }
        );

        // Responder con éxito y el token
        res.status(200).json({
            success: true,
            message: 'Inicio de sesión exitoso',
            token,
            user: { id_usuario: user.id_usuario, nombre_usuario: user.nombre_usuario, email: user.email }
        });
    } catch (error) {
        console.error(error);  // Ver detalles del error
        res.status(500).json({ success: false, message: error.message });
    }
};

export const logout = (req, res) => {
    res.status(200).json({ success: true, message: 'Sesión cerrada exitosamente' });
};
