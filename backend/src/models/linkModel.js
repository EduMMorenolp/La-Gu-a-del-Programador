export const getAllLinks = async () => {
  try {
    const [rows] = await global.dbConnection.execute(`
            SELECT l.id_link, r.titulo, r.descripcion, l.url, r.id_categoria
            FROM link l
            JOIN recurso r ON l.id_recurso = r.id_recurso
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
            FROM link l
            JOIN recurso r ON l.id_recurso = r.id_recurso
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
            INSERT INTO recurso (tipo_recurso, titulo, descripcion, id_categoria)
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

    const fieldsToUpdate = [];
    const values = [];

    if (titulo !== undefined) {
      fieldsToUpdate.push('r.titulo = COALESCE(?, r.titulo)');
      values.push(titulo || null);
    }

    if (Object.hasOwn(link, 'descripcion')) {
      fieldsToUpdate.push('r.descripcion = ?');
      values.push(descripcion === '' ? null : descripcion);
    }

    if (id_categoria !== undefined) {
      fieldsToUpdate.push('r.id_categoria = COALESCE(?, r.id_categoria)');
      values.push(id_categoria || null);
    }

    if (fieldsToUpdate.length > 0) {
      const updateResourceQuery = `
          UPDATE recurso r
          JOIN link l ON r.id_recurso = l.id_recurso
          SET ${fieldsToUpdate.join(', ')}
          WHERE l.id_link = ?
      `;
      values.push(idLink);

      const [resourceResult] = await global.dbConnection.execute(
        updateResourceQuery,
        values
      );

      if (resourceResult.affectedRows === 0) {
        throw {
          statusCode: 404,
          message: `No se encontro el link con ID ${idLink} para actualizar`,
        };
      }
    } else if (url == undefined) {
      throw {
        statusCode: 400,
        message: 'No hay cambios para actualizar',
      };
    }

    if (url !== undefined) {
      const [linkResult] = await global.dbConnection.execute(
        `
            UPDATE link
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
            DELETE FROM recurso
            WHERE id_recurso = (
                SELECT id_recurso FROM link WHERE id_link = ?
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
