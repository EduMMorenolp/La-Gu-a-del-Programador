import * as videoService from '../services/videoService.js';

import {
  validateCreateResource,
  validateRequest,
  validateUpdateResource,
  validateVideoId,
} from '../utils/resourceValidator.js';

export const getAllVideos = async (req, res, next) => {
  try {
    const videos = await videoService.fetchAllVideos();
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

export const getVideoById = [
  ...validateVideoId,
  async (req, res, next) => {
    try {
      validateRequest(req);
      const video = await videoService.fetchVideoById(req.params.videoId);
      res.status(200).json(video);
    } catch (error) {
      next(error);
    }
  },
];

export const createVideo = [
  ...validateCreateResource,
  async (req, res, next) => {
    try {
      validateRequest(req);
      const video = await videoService.addVideo(req.body);
      res.status(201).json(video);
    } catch (error) {
      next(error);
    }
  },
];

export const updateVideo = [
  ...validateVideoId,
  ...validateUpdateResource,
  async (req, res, next) => {
    try {
      validateRequest(req);
      const video = await videoService.modifyVideo(
        req.params.videoId,
        req.body
      );
      res.status(200).json(video);
    } catch (error) {
      next(error);
    }
  },
];

export const deleteVideo = [
  ...validateVideoId,
  async (req, res, next) => {
    try {
      validateRequest(req);
      await videoService.removeVideo(req.params.videoId);
      res.status(200).json({ message: 'Recurso eliminado' });
    } catch (error) {
      next(error);
    }
  },
];
