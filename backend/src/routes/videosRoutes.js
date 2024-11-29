import express from 'express';
import * as videosController from '../controllers/videosController.js';

const router = express.Router();

router.get('/', videosController.getAllVideos);
router.get('/:videoId', videosController.getVideoById);
router.post('/', videosController.createVideo);
router.put('/:videoId', videosController.updateVideo);
router.delete('/:videoId', videosController.deleteVideo);

export default router;
