import * as videoModel from '../models/videoModel.js';

export const fetchAllVideos = async () => {
  return await videoModel.getAllVideos();
};

export const fetchVideoById = async (id) => {
  return await videoModel.getVideoById(id);
};

export const addVideo = async (videoData) => {
  return await videoModel.createVideo(videoData);
};

export const modifyVideo = async (id, videoData) => {
  return await videoModel.updateVideo(id, videoData);
};

export const removeVideo = async (id) => {
  return await videoModel.deleteVideo(id);
};
