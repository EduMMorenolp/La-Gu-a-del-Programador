import * as linkService from '../services/linkService.js';

// TODO: validar y sanitizar las requests

export const getAllLinks = async (req, res) => {
  try {
    const links = await linkService.fetchAllLinks();
    res.status(200).json(links); // TODO: handlear con el middleware de conexiones
  } catch (error) {
    res.status(500).json({ error: error.message }); // TODO: handlear con el middleware de conexiones
  }
};

export const getLinkById = async (req, res) => {
  try {
    const link = await linkService.fetchLinkById(req.params.linkId);
    res.status(200).json(link); // TODO: handlear con el middleware de conexiones
  } catch (error) {
    res.status(404).json({ error: error.message }); // TODO: handlear con el middleware de conexiones
  }
};

export const createLink = async (req, res) => {
  try {
    const linkId = await linkService.addLink(req.body);
    res.status(201).json({ message: 'Link creado', id: linkId }); // TODO: handlear con el middleware de conexiones
  } catch (error) {
    res.status(500).json({ error: error.message }); // TODO: handlear con el middleware de conexiones
  }
};

export const updateLink = async (req, res) => {
  try {
    await linkService.modifyLink(req.params.linkId, req.body);
    res.status(200).json({ message: 'Link actualizado' }); // TODO: handlear con el middleware de conexiones
  } catch (error) {
    res.status(404).json({ error: error.message }); // TODO: handlear con el middleware de conexiones
  }
};

export const deleteLink = async (req, res) => {
  try {
    await linkService.removeLink(req.params.linkId);
    res.status(200).json({ message: 'Link eliminado' }); // TODO: handlear con el middleware de conexiones
  } catch (error) {
    res.status(404).json({ error: error.message }); // TODO: handlear con el middleware de conexiones
  }
};
