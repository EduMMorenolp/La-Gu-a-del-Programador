import { body, param, validationResult } from 'express-validator';

export const validateLinkId = [
  param('linkId')
    .notEmpty()
    .withMessage('El id del link es obligatorio')
    .isInt({ min: 1 })
    .withMessage('El ID del link debe ser un numero entero positivo')
    .toInt(),
];

export const validateVideoId = [
  param('videoId')
    .notEmpty()
    .withMessage('El id del video es obligatorio')
    .isInt({ min: 1 })
    .withMessage('El ID del video debe ser un numero entero positivo')
    .toInt(),
];

export const validateCreateResource = [
  body('titulo')
    .trim()
    .notEmpty()
    .withMessage('El titulo es obligatorio')
    .isLength({ max: 100 })
    .withMessage('El titulo no puede exceder los 100 caracteres')
    .escape(),
  body('descripcion')
    .trim()
    .optional({ checkFalsy: true })
    .isLength({ max: 1000 })
    .withMessage('La descripcion no puede exceder los 1000 caracteres')
    .escape(),
  body('id_categoria')
    .notEmpty()
    .withMessage('El id de la categoria es obligatorio')
    .isInt({ min: 1 })
    .withMessage('La categoria debe ser un numero entero positivo')
    .toInt(),
  body('url')
    .trim()
    .notEmpty()
    .withMessage('La URL es obligatoria')
    .isURL({ protocols: ['http', 'https'], require_protocol: true })
    .withMessage('La URL es invalida (usar http/https)'),
];

export const validateUpdateResource = [
  body('titulo')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 100 })
    .withMessage('El titulo no puede exceder los 100 caracteres')
    .escape(),
  body('descripcion')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 1000 })
    .withMessage('La descripcion no puede exceder los 1000 caracteres')
    .escape(),
  body('id_categoria')
    .optional({ checkFalsy: true })
    .isInt({ min: 1 })
    .withMessage('La categoria debe ser un numero entero positivo')
    .toInt(),
  body('url')
    .optional({ checkFalsy: true })
    .trim()
    .isURL({ protocols: ['http', 'https'], require_protocol: true })
    .withMessage('La URL es invalida (usar http/https)'),
];

export const validateRequest = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error(errors.array()[0].msg);
    error.statusCode = 400;
    throw error;
  }
};
