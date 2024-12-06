export const getAllVideos = async () => {
  try {
    const [rows] = await global.dbConnection.execute(`
            SELECT v.id_video, r.titulo, r.descripcion, v.url, r.id_categoria
            FROM Video v
            JOIN Recurso r ON v.id_recurso = r.id_recurso
        `);
    return rows;
  } catch (error) {
    throw error; // TODO: handlear con el middleware de errores
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
    return rows[0];
  } catch (error) {
    throw error; // TODO: handlear con el middleware de errores
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

    await global.dbConnection.commit();
    return videoResult.insertId;
  } catch (error) {
    await global.dbConnection.rollback();
    throw error; // TODO: handlear con el middleware de errores
  }
};

export const updateVideo = async (idVideo, video) => {
  const { titulo, descripcion, id_categoria, url } = video;
  try {
    await global.dbConnection.beginTransaction();

    await global.dbConnection.execute(
      `
            UPDATE Recurso r
            JOIN Video v ON r.id_recurso = v.id_recurso
            SET r.titulo = ?, r.descripcion = ?, r.id_categoria = ?
            WHERE v.id_video = ?
        `,
      [titulo, descripcion, id_categoria, idVideo]
    );

    const [videoResult] = await global.dbConnection.execute(
      `
            UPDATE Video
            SET url = ?
            WHERE id_video = ?
        `,
      [url, idVideo]
    );

    await global.dbConnection.commit();
    return videoResult.affectedRows;
  } catch (error) {
    await global.dbConnection.rollback();
    throw error; // TODO: handlear con el middleware de errores
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
    return result.affectedRows;
  } catch (error) {
    throw error; // TODO: handlear con el middleware de errores
  }
};
