import * as videoService from '../services/videoService.js';

// TODO: validar y sanitizar las requests

export const getAllVideos = async (req, res) => {
  try {
    const videos = await videoService.fetchAllVideos();
    res.status(200).json(videos); // TODO: handlear con el middleware de conexiones
  } catch (error) {
    res.status(500).json({ error: error.message }); // TODO: handlear con el middleware de conexiones
  }
};

export const getVideoById = async (req, res) => {
  try {
    const video = await videoService.fetchVideoById(req.params.videoId);
    res.status(200).json(video); // TODO: handlear con el middleware de conexiones
  } catch (error) {
    res.status(404).json({ error: error.message }); // TODO: handlear con el middleware de conexiones
  }
};

export const createVideo = async (req, res) => {
  try {
    const videoId = await videoService.addVideo(req.body);
    res.status(201).json({ message: 'Video creado', id: videoId }); // TODO: handlear con el middleware de conexiones
  } catch (error) {
    res.status(500).json({ error: error.message }); // TODO: handlear con el middleware de conexiones
  }
};

export const updateVideo = async (req, res) => {
  try {
    await videoService.modifyVideo(req.params.videoId, req.body);
    res.status(200).json({ message: 'Video actualizado' }); // TODO: handlear con el middleware de conexiones
  } catch (error) {
    res.status(404).json({ error: error.message }); // TODO: handlear con el middleware de conexiones
  }
};

export const deleteVideo = async (req, res) => {
  try {
    await videoService.removeVideo(req.params.videoId);
    res.status(200).json({ message: 'Video eliminado' }); // TODO: handlear con el middleware de conexiones
  } catch (error) {
    res.status(404).json({ error: error.message }); // TODO: handlear con el middleware de conexiones
  }
};
