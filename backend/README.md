# Backend - La Guía del Programador

Este es el backend para el proyecto **La Guía del Programador**. Proporciona una API RESTful que interactúa con una base de datos MySQL y sirve la documentación de la API mediante Swagger.

## Descripción

El backend de La Guía del Programador está desarrollado con Node.js y Express. Está diseñado para proporcionar acceso a los recursos de la plataforma, como videos de YouTube, links de programación, y permite la sugerencia de contenido por parte de los usuarios.

## Tecnologías Utilizadas

- **Node.js**: Plataforma para construir la API.
- **Express**: Framework para manejar las rutas y solicitudes HTTP.
- **MySQL**: Base de datos para almacenar información relevante de los usuarios y contenido.
- **Swagger**: Para documentar la API de manera interactiva.
- **dotenv**: Para manejar variables de entorno.
- **cors**: Para permitir solicitudes CORS desde otros orígenes.

## Requisitos

- Node.js >= 16.0.0
- MySQL >= 5.7
- dotenv
- mysql2

## Estructura del Proyecto

```bash
backend/
├── node_modules/        # Dependencias del proyecto
├── src/                 # Código fuente
│   ├── controllers/     # Lógica de las rutas
│   │   ├── linksController.js
│   │   ├── suggestionsController.js
│   │   └── youtubeController.js
│   ├── routes/          # Definición de las rutas
│   │   ├── linksRoutes.js
│   │   ├── suggestionsRoutes.js
│   │   └── youtubeRoutes.js
│   ├── models/          # Modelos de datos
│   │   ├── linkModel.js
│   │   ├── suggestionModel.js
│   │   └── youtubeModel.js
│   ├── services/        # Lógica de negocio o conexión a servicios externos
│   │   ├── dbService.js
│   │   └── validationService.js
│   ├── config/          # Configuraciones generales
│   │   ├── dbConfig.js
│   │   └── swaggerConfig.js
│   ├── middlewares/     # Middleware personalizados
│   │   ├── errorHandler.js
│   │   └── authMiddleware.js
│   ├── utils/           # Utilidades generales
│   │   └── responseHelper.js
│   ├── app.js           # Configuración inicial de Express
│   └── index.js         # Punto de entrada principal
├── tests/               # Tests del proyecto
│   ├── integration/     # Pruebas de integración
│   └── unit/            # Pruebas unitarias
├── .env                 # Variables de entorno
├── .env.example         # Ejemplo de variables de entorno
├── .gitignore           # Archivos y carpetas a ignorar por Git
├── package.json         # Configuración del proyecto y dependencias
└── README.md            # Información del proyecto
```
