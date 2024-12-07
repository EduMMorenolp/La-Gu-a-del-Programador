import express from 'express';
import * as linksController from '../controllers/linksController.js';

const router = express.Router();

router.get('/', linksController.getAllLinks);
router.get('/:linkId', linksController.getLinkById);
router.post('/', linksController.createLink);
router.put('/:linkId', linksController.updateLink);
router.delete('/:linkId', linksController.deleteLink);

export default router;
