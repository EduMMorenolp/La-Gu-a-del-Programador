import * as linkModel from '../models/linkModel.js';

export const fetchAllLinks = async () => {
  return await linkModel.getAllLinks();
};

export const fetchLinkById = async (id) => {
  return await linkModel.getLinkById(id);
};

export const addLink = async (linkData) => {
  return await linkModel.createLink(linkData);
};

export const modifyLink = async (id, linkData) => {
  return await linkModel.updateLink(id, linkData);
};

export const removeLink = async (id) => {
  return await linkModel.deleteLink(id);
};
