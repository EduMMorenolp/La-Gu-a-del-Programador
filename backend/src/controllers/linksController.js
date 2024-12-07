import * as linkService from '../services/linkService.js';

// TODO: validar y sanitizar las requests

export const getAllLinks = async (req, res, next) => {
  try {
    const links = await linkService.fetchAllLinks();
    res.status(200).json(links);
  } catch (error) {
    next(error);
  }
};

export const getLinkById = async (req, res, next) => {
  try {
    const link = await linkService.fetchLinkById(req.params.linkId);
    res.status(200).json(link);
  } catch (error) {
    next(error);
  }
};

export const createLink = async (req, res, next) => {
  try {
    const link = await linkService.addLink(req.body);
    res.status(201).json(link);
  } catch (error) {
    next(error);
  }
};

export const updateLink = async (req, res, next) => {
  try {
    const link = await linkService.modifyLink(req.params.linkId, req.body);
    res.status(200).json(link);
  } catch (error) {
    next(error);
  }
};

export const deleteLink = async (req, res, next) => {
  try {
    await linkService.removeLink(req.params.linkId);
    res.status(200).json({ message: 'Link eliminado' });
  } catch (error) {
    next(error);
  }
};
