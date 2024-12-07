import * as videoService from '../services/videoService.js';

// TODO: validar y sanitizar las requests

export const getAllVideos = async (req, res, next) => {
  try {
    const videos = await videoService.fetchAllVideos();
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

export const getVideoById = async (req, res, next) => {
  try {
    const video = await videoService.fetchVideoById(req.params.videoId);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

export const createVideo = async (req, res, next) => {
  try {
    const video = await videoService.addVideo(req.body);
    res.status(201).json(video);
  } catch (error) {
    next(error);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await videoService.modifyVideo(req.params.videoId, req.body);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    await videoService.removeVideo(req.params.videoId);
    res.status(200).json({ message: 'Video eliminado' });
  } catch (error) {
    next(error);
  }
};
