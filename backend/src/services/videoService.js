import * as videoModel from '../models/videoModel.js';

export const fetchAllVideos = async () => {
  return await videoModel.getAllVideos();
};

export const fetchVideoById = async (id) => {
  const video = await videoModel.getVideoById(id);
  if (!video) throw new Error(`Video con ID ${id} no encontrado`);
  return video;
};

export const addVideo = async (videoData) => {
  return await videoModel.createVideo(videoData);
};

export const modifyVideo = async (id, videoData) => {
  const updatedRows = await videoModel.updateVideo(id, videoData);
  if (updatedRows === 0)
    throw new Error(`No se pudo actualizar el video con ID ${id}`);
  return updatedRows;
};

export const removeVideo = async (id) => {
  const deletedRows = await videoModel.deleteVideo(id);
  if (deletedRows === 0)
    throw new Error(`No se pudo eliminar el video con ID ${id}`);
  return deletedRows;
};
