export const getAllLinks = async () => {
  try {
    const [rows] = await global.dbConnection.execute(`
            SELECT l.id_link, r.titulo, r.descripcion, l.url, r.id_categoria
            FROM Link l
            JOIN Recurso r ON l.id_recurso = r.id_recurso
        `);
    return rows;
  } catch (error) {
    throw error; // TODO: handlear con el middleware de errores
  }
};

export const getLinkById = async (idLink) => {
  try {
    const [rows] = await global.dbConnection.execute(
      `
            SELECT l.id_link, r.titulo, r.descripcion, l.url, r.id_categoria
            FROM Link l
            JOIN Recurso r ON l.id_recurso = r.id_recurso
            WHERE l.id_link = ?
        `,
      [idLink]
    );
    return rows[0];
  } catch (error) {
    throw error; // TODO: handlear con el middleware de errores
  }
};

export const createLink = async (link) => {
  const { titulo, descripcion, id_categoria, url } = link;
  try {
    await global.dbConnection.beginTransaction();
    const [recursoResult] = await global.dbConnection.execute(
      `
            INSERT INTO Recurso (tipo_recurso, titulo, descripcion, id_categoria)
            VALUES ('link', ?, ?, ?)
        `,
      [titulo, descripcion, id_categoria]
    );

    const idRecurso = recursoResult.insertId;

    const [linkResult] = await global.dbConnection.execute(
      `
            INSERT INTO Link (id_recurso, url)
            VALUES (?, ?)
        `,
      [idRecurso, url]
    );

    await global.dbConnection.commit();
    return linkResult.insertId;
  } catch (error) {
    await global.dbConnection.rollback();
    throw error; // TODO: handlear con el middleware de errores
  }
};

export const updateLink = async (idLink, link) => {
  const { titulo, descripcion, id_categoria, url } = link;
  try {
    await global.dbConnection.beginTransaction();

    await global.dbConnection.execute(
      `
            UPDATE Recurso r
            JOIN Link l ON r.id_recurso = l.id_recurso
            SET r.titulo = ?, r.descripcion = ?, r.id_categoria = ?
            WHERE l.id_link = ?
        `,
      [titulo, descripcion, id_categoria, idLink]
    );

    const [linkResult] = await global.dbConnection.execute(
      `
            UPDATE Link
            SET url = ?
            WHERE id_link = ?
        `,
      [url, idLink]
    );

    await global.dbConnection.commit();
    return linkResult.affectedRows;
  } catch (error) {
    await global.dbConnection.rollback();
    throw error; // TODO: handlear con el middleware de errores
  }
};

export const deleteLink = async (idLink) => {
  try {
    const [result] = await global.dbConnection.execute(
      `
            DELETE FROM Recurso
            WHERE id_recurso = (
                SELECT id_recurso FROM Link WHERE id_link = ?
            )
        `,
      [idLink]
    );
    return result.affectedRows;
  } catch (error) {
    throw error; // TODO: handlear con el middleware de errores
  }
};
