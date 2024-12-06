import * as linkModel from '../models/linkModel.js';

export const fetchAllLinks = async () => {
  return await linkModel.getAllLinks();
};

export const fetchLinkById = async (id) => {
  const link = await linkModel.getLinkById(id);
  if (!link) throw new Error(`Link con ID ${id} no encontrado`);
  return link;
};

export const addLink = async (linkData) => {
  return await linkModel.createLink(linkData);
};

export const modifyLink = async (id, linkData) => {
  const updatedRows = await linkModel.updateLink(id, linkData);
  if (updatedRows === 0)
    throw new Error(`No se pudo actualizar el link con ID ${id}`);
  return updatedRows;
};

export const removeLink = async (id) => {
  const deletedRows = await linkModel.deleteLink(id);
  if (deletedRows === 0)
    throw new Error(`No se pudo eliminar el link con ID ${id}`);
  return deletedRows;
};
