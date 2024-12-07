export const getAllLinks = async () => {
  try {
    const [rows] = await global.dbConnection.execute(`
            SELECT l.id_link, r.titulo, r.descripcion, l.url, r.id_categoria
            FROM Link l
            JOIN Recurso r ON l.id_recurso = r.id_recurso
        `);
    return rows;
  } catch (error) {
    throw error;
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

    if (!rows[0]) {
      throw {
        statusCode: 404,
        message: `Link con ID ${idLink} no encontrado`,
      };
    }

    return rows[0];
  } catch (error) {
    throw error;
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

    const idLink = linkResult.insertId;

    await global.dbConnection.commit();

    return {
      id_link: idLink,
      titulo,
      descripcion,
      id_categoria,
      url,
    };
  } catch (error) {
    await global.dbConnection.rollback();

    if (error.code === 'ER_DUP_ENTRY') {
      error.statusCode = 400;
      error.message = 'Ya existe un link con esa URL';
    }

    throw error;
  }
};

export const updateLink = async (idLink, link) => {
  const { titulo, descripcion, id_categoria, url } = link;
  try {
    await global.dbConnection.beginTransaction();

    const [resourceResult] = await global.dbConnection.execute(
      `
            UPDATE Recurso r
            JOIN Link l ON r.id_recurso = l.id_recurso
            SET r.titulo = ?, r.descripcion = ?, r.id_categoria = ?
            WHERE l.id_link = ?
        `,
      [titulo, descripcion, id_categoria, idLink]
    );

    if (resourceResult.affectedRows === 0) {
      throw {
        statusCode: 404,
        message: `No se encontro el link con ID ${idLink} para actualizar`,
      };
    }

    const [linkResult] = await global.dbConnection.execute(
      `
            UPDATE Link
            SET url = ?
            WHERE id_link = ?
        `,
      [url, idLink]
    );

    if (linkResult.affectedRows === 0) {
      throw {
        statusCode: 400,
        message: 'No se pudo actualizar la URL del link',
      };
    }

    await global.dbConnection.commit();

    return {
      id_link: idLink,
      titulo,
      descripcion,
      id_categoria,
      url,
    };
  } catch (error) {
    await global.dbConnection.rollback();

    if (error.code === 'ER_DUP_ENTRY') {
      error.statusCode = 400;
      error.message = 'Ya existe un link con esa URL';
    }

    throw error;
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
    if (result.affectedRows === 0) {
      throw {
        statusCode: 404,
        message: `No se encontro el link con ID ${idLink} para eliminar`,
      };
    }
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
};
