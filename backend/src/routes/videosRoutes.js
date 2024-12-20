import express from 'express';
import * as videosController from '../controllers/videosController.js';

import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = express.Router();

router.get('/', videosController.getAllVideos);
router.get('/:videoId', videosController.getVideoById);
router.post('/',authenticateToken, videosController.createVideo);
router.put('/:videoId',authenticateToken, videosController.updateVideo);
router.delete('/:videoId',authenticateToken, videosController.deleteVideo);

export default router;
