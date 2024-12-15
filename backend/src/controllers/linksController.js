import * as linkService from '../services/linkService.js';

import {
  validateCreateResource,
  validateLinkId,
  validateRequest,
  validateUpdateResource,
} from '../utils/resourceValidator.js';

export const getAllLinks = async (req, res, next) => {
  try {
    const links = await linkService.fetchAllLinks();
    res.status(200).json(links);
  } catch (error) {
    next(error);
  }
};

export const getLinkById = [
  ...validateLinkId,
  async (req, res, next) => {
    try {
      validateRequest(req);
      const link = await linkService.fetchLinkById(req.params.linkId);
      res.status(200).json(link);
    } catch (error) {
      next(error);
    }
  },
];

export const createLink = [
  ...validateCreateResource,
  async (req, res, next) => {
    try {
      validateRequest(req);
      const link = await linkService.addLink(req.body);
      res.status(201).json(link);
    } catch (error) {
      next(error);
    }
  },
];

export const updateLink = [
  ...validateLinkId,
  ...validateUpdateResource,
  async (req, res, next) => {
    try {
      validateRequest(req);
      const link = await linkService.modifyLink(req.params.linkId, req.body);
      res.status(200).json(link);
    } catch (error) {
      next(error);
    }
  },
];

export const deleteLink = [
  ...validateLinkId,
  async (req, res, next) => {
    try {
      validateRequest(req);
      await linkService.removeLink(req.params.linkId);
      res.status(200).json({ message: 'Recurso eliminado' });
    } catch (error) {
      next(error);
    }
  },
];
