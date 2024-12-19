import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userService from '../services/userService.js';

export const login = async (req, res) => {
    try {
        const { email, contrasena } = req.body;

        // Buscar al usuario por email
        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
        }

        // Verificar contraseña
        const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
        }

        // Generar token JWT
        const token = jwt.sign(
            { id_usuario: user.id_usuario, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION_TIME || '1h' }
        );

        res.status(200).json({
            success: true,
            message: 'Inicio de sesión exitoso',
            token,
            user: { id_usuario: user.id_usuario, nombre_usuario: user.nombre_usuario, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const logout = (req, res) => {
    res.status(200).json({ success: true, message: 'Sesión cerrada exitosamente' });
};
