export const getAllSuggestions = async () => {
    try {
        const [rows] = await global.dbConnection.execute(`
            SELECT s.id_sugerencia, s.titulo, s.descripcion, s.fecha_envio, u.nombre_usuario 
            FROM sugerencia s 
            JOIN usuario u ON s.id_usuario = u.id_usuario
        `);
        return rows;
    } catch (error) {
        throw error;
    }
};

export const createSuggestion = async ({ titulo, descripcion, id_usuario }) => {
    try {
        const [result] = await global.dbConnection.execute(`
            INSERT INTO sugerencia (titulo, descripcion, id_usuario) 
            VALUES (?, ?, ?)
        `, [titulo, descripcion, id_usuario]);

        return { id_sugerencia: result.insertId };
    } catch (error) {
        throw error;
    }
};