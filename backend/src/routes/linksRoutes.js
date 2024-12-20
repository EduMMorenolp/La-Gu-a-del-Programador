import express from 'express';
import * as linksController from '../controllers/linksController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = express.Router();

router.get('/', linksController.getAllLinks);
router.get('/:linkId', linksController.getLinkById);
router.post('/',authenticateToken, linksController.createLink);
router.put('/:linkId',authenticateToken, linksController.updateLink);
router.delete('/:linkId',authenticateToken, linksController.deleteLink);

export default router;
