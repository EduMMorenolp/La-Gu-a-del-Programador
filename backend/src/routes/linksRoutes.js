import express from 'express';
import * as linksController from '../controllers/linksController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';
import { authorize } from '../middlewares/authorizeRol.js';

const router = express.Router();

router.get('/', linksController.getAllLinks);
router.get('/:linkId', linksController.getLinkById);
router.post(
  '/',
  authenticateToken,
  authorize(['admin']),
  linksController.createLink
);
router.put(
  '/:linkId',
  authenticateToken,
  authorize(['admin']),
  linksController.updateLink
);
router.delete(
  '/:linkId',
  authenticateToken,
  authorize(['admin']),
  linksController.deleteLink
);

export default router;
