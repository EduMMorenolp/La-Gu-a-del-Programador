import * as userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

/**
 * Obtiene un usuario por su email.
 * @param {string} email - Email del usuario.
 * @returns {Object} Usuario encontrado.
 */
export const getUserByEmail = async (email) => {
  const user = await userModel.getUserByEmail(email);
  if (!user) {
    throw {
      statusCode: 404,
      message: `Usuario con email ${email} no encontrado`,
    };
  }
  return user;
};

/**
 * Crea un nuevo usuario.
 * @param {Object} user - Datos del usuario (nombre_usuario, email, contrasena).
 * @returns {Object} Usuario creado.
 */
export const createUserService = async (user) => {
  const hashedPassword = await bcrypt.hash(user.contrasena, 10);
  const newUser = await userModel.createUser({
    ...user,
    contrasena: hashedPassword,
  });
  return { ...newUser, nombre_usuario: user.nombre_usuario, email: user.email };
};

/**
 * Actualiza un usuario existente.
 * @param {number} userId - ID del usuario.
 * @param {Object} user - Datos del usuario (nombre_usuario, email, contrasena).
 * @returns {Object} Usuario actualizado.
 */
export const updateUserService = async (userId, user) => {
  const hashedPassword = await bcrypt.hash(user.contrasena, 10);
  const isUpdated = await userModel.updateUser(userId, {
    ...user,
    contrasena: hashedPassword,
  });
  if (!isUpdated) {
    throw {
      statusCode: 404,
      message: `Usuario con ID ${userId} no encontrado`,
    };
  }
  return { id_usuario: userId, ...user };
};

/**
 * Elimina un usuario por su ID.
 * @param {number} userId - ID del usuario.
 * @returns {boolean} Resultado de la operación.
 */
export const deleteUser = async (userId) => {
  const isDeleted = await userModel.deleteUser(userId);
  if (!isDeleted) {
    throw {
      statusCode: 404,
      message: `Usuario con ID ${userId} no encontrado`,
    };
  }
  return true;
};
