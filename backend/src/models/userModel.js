export const createUser = async ({ nombre_usuario, email, contrasena }) => {
    try {
        const [result] = await global.dbConnection.execute(`
            INSERT INTO usuario (nombre_usuario, email, contrasena) 
            VALUES (?, ?, ?)
        `, [nombre_usuario, email, contrasena]);

        return { id_usuario: result.insertId };
    } catch (error) {
        throw error;
    }
};

export const getUserByEmail = async (email) => {
    try {
        const user = await global.dbConnection.execute('SELECT * FROM usuario WHERE email = ?', [email]);
        return user;
    } catch (error) {
        throw { statusCode: 500, message: 'Error al buscar el usuario por email' };
    }
};

export const updateUser = async (idUsuario, { nombre_usuario, email, contrasena }) => {
    try {
        const [result] = await global.dbConnection.execute(`
            UPDATE usuario 
            SET nombre_usuario = ?, email = ?, contrasena = ? 
            WHERE id_usuario = ?
        `, [nombre_usuario, email, contrasena, idUsuario]);

        if (result.affectedRows === 0) {
            throw {
                statusCode: 404,
                message: `Usuario con ID ${idUsuario} no encontrado`,
            };
        }

        return true;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (idUsuario) => {
    try {
        const [result] = await global.dbConnection.execute(`
            DELETE FROM usuario WHERE id_usuario = ?
        `, [idUsuario]);

        if (result.affectedRows === 0) {
            throw {
                statusCode: 404,
                message: `Usuario con ID ${idUsuario} no encontrado`,
            };
        }

        return true;
    } catch (error) {
        throw error;
    }
};
