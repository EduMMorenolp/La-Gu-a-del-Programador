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

## Estructura del Proyecto

backend/
├── node_modules/          # Dependencias instaladas
├── src/                   
│   ├── config/            # Archivos de configuración (por ejemplo, base de datos, variables de entorno)
│   ├── controllers/       # Lógica de las rutas (manejadores de controladores)
│   ├── models/            # Modelos de datos (definición de tablas MySQL)
│   ├── routes/            # Rutas de la API
│   ├── services/          # Lógica de negocio (opcional, puede ser algo más avanzado)
│   ├── utils/             # Utilidades generales (por ejemplo, validaciones, formateo de datos)
│   └── index.js           # Archivo principal para iniciar el servidor
├── .gitignore             # Archivos y carpetas a ignorar en Git
├── package.json           # Configuración del proyecto
├── .env                   # Variables de entorno
└── README.md              # Documentación del proyecto