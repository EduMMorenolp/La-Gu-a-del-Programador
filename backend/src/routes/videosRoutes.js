import express from 'express';
import * as videosController from '../controllers/videosController.js';

import { authenticateToken } from '../middlewares/authenticateToken.js';

import { authorize } from '../middlewares/authorizeRol.js';

const router = express.Router();

router.get('/', videosController.getAllVideos);
router.get('/:videoId', videosController.getVideoById);
router.post('/', authenticateToken, authorize(['admin']), videosController.createVideo);
router.put('/:videoId', authenticateToken, authorize(['admin']), videosController.updateVideo);
router.delete('/:videoId', authenticateToken, authorize(['admin']), videosController.deleteVideo);

export default router;
