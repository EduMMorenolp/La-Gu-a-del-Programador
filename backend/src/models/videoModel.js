export const getAllVideos = async () => {
  try {
    const [rows] = await global.dbConnection.execute(`
            SELECT v.id_video, r.titulo, r.descripcion, v.url, r.id_categoria
            FROM Video v
            JOIN Recurso r ON v.id_recurso = r.id_recurso
        `);
    return rows;
  } catch (error) {
    throw error;
  }
};

export const getVideoById = async (idVideo) => {
  try {
    const [rows] = await global.dbConnection.execute(
      `
            SELECT v.id_video, r.titulo, r.descripcion, v.url, r.id_categoria
            FROM Video v
            JOIN Recurso r ON v.id_recurso = r.id_recurso
            WHERE v.id_video = ?
        `,
      [idVideo]
    );

    if (!rows[0]) {
      throw {
        statusCode: 404,
        message: `Video con ID ${idVideo} no encontrado`,
      };
    }

    return rows[0];
  } catch (error) {
    throw error;
  }
};

export const createVideo = async (video) => {
  const { titulo, descripcion, id_categoria, url } = video;
  try {
    await global.dbConnection.beginTransaction();
    const [recursoResult] = await global.dbConnection.execute(
      `
            INSERT INTO Recurso (tipo_recurso, titulo, descripcion, id_categoria)
            VALUES ('video', ?, ?, ?)
        `,
      [titulo, descripcion, id_categoria]
    );

    const idRecurso = recursoResult.insertId;

    const [videoResult] = await global.dbConnection.execute(
      `
            INSERT INTO Video (id_recurso, url)
            VALUES (?, ?)
        `,
      [idRecurso, url]
    );

    const idVideo = videoResult.insertId;

    await global.dbConnection.commit();

    return {
      id_video: idVideo,
      titulo,
      descripcion,
      id_categoria,
      url,
    };
  } catch (error) {
    await global.dbConnection.rollback();

    if (error.code === 'ER_DUP_ENTRY') {
      error.statusCode = 400;
      error.message = 'Ya existe un video con esa URL';
    }

    throw error;
  }
};

export const updateVideo = async (idVideo, video) => {
  const { titulo, descripcion, id_categoria, url } = video;
  try {
    await global.dbConnection.beginTransaction();

    const [resourceResult] = await global.dbConnection.execute(
      `
            UPDATE Recurso r
            JOIN Video v ON r.id_recurso = v.id_recurso
            SET r.titulo = ?, r.descripcion = ?, r.id_categoria = ?
            WHERE v.id_video = ?
        `,
      [titulo, descripcion, id_categoria, idVideo]
    );

    if (resourceResult.affectedRows === 0) {
      throw {
        statusCode: 404,
        message: `No se encontro el video con ID ${idVideo} para actualizar`,
      };
    }

    const [videoResult] = await global.dbConnection.execute(
      `
            UPDATE Video
            SET url = ?
            WHERE id_video = ?
        `,
      [url, idVideo]
    );

    if (videoResult.affectedRows === 0) {
      throw {
        statusCode: 400,
        message: 'No se pudo actualizar la URL del video',
      };
    }

    await global.dbConnection.commit();

    return {
      id_video: idVideo,
      titulo,
      descripcion,
      id_categoria,
      url,
    };
  } catch (error) {
    await global.dbConnection.rollback();

    if (error.code === 'ER_DUP_ENTRY') {
      error.statusCode = 400;
      error.message = 'Ya existe un video con esa URL';
    }

    throw error;
  }
};

export const deleteVideo = async (idVideo) => {
  try {
    const [result] = await global.dbConnection.execute(
      `
            DELETE FROM Recurso
            WHERE id_recurso = (
                SELECT id_recurso FROM Video WHERE id_video = ?
            )
        `,
      [idVideo]
    );
    if (result.affectedRows === 0) {
      throw {
        statusCode: 404,
        message: `No se encontro el video con ID ${idVideo} para eliminar`,
      };
    }
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
};
