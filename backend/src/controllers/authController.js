import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userService from '../services/userService.js';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res) => {
    try {
        const { email, contrasena } = req.body;

        // Buscar al usuario por email
        const users = await userService.getUserByEmail(email);

        console.log(users);

        // Verificar que el usuario exista
        if (!users || users[0].length === 0) {
            return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
        }

        const user = users[0];

        if (!user[0].contrasena) {
            return res.status(401).json({ success: false, message: 'Usuario sin contraseña registrada' });
        }

        const isPasswordValid = await bcrypt.compare(contrasena, user[0].contrasena);

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
            user: { id_usuario: user[0].id_usuario, nombre_usuario: user[0].nombre_usuario, email: user[0].email }
        });
    } catch (error) {
        console.error(error);  // Ver detalles del error
        res.status(500).json({ success: false, message: error.message });
    }
};

export const logout = (req, res) => {
    res.status(200).json({ success: true, message: 'Sesión cerrada exitosamente' });
};
