# API URL

https://la-guia-del-programador.onrender.com

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
│   │   ├── authController.js       # Controlador para autenticación (login/logout)
│   │   ├── linksController.js      # Controlador para CRUD de links
│   │   ├── suggestionsController.js # Controlador para CRUD de sugerencias
│   │   ├── usersController.js      # Controlador para CRUD de usuarios
│   │   ├── videosController.js     # Controlador para CRUD de videos
│   ├── routes/          # Definición de las rutas
│   │   ├── authRoutes.js           # Rutas de autenticación
│   │   ├── linksRoutes.js          # Rutas de CRUD de links
│   │   ├── suggestionsRoutes.js    # Rutas de CRUD de sugerencias
│   │   ├── usersRoutes.js          # Rutas de CRUD de usuarios
│   │   ├── videosRoutes.js         # Rutas de CRUD de videos
│   ├── models/          # Modelos de datos
│   │   ├── linkModel.js            # Modelo para links
│   │   ├── suggestionModel.js      # Modelo para sugerencias
│   │   ├── userModel.js            # Modelo para usuarios
│   │   ├── videoModel.js           # Modelo para videos
│   ├── services/        # Lógica de negocio o conexión a servicios externos
│   │   ├── authService.js          # Lógica de autenticación
│   │   ├── linkService.js          # Lógica de negocio para links
│   │   ├── suggestionService.js    # Lógica de negocio para sugerencias
│   │   ├── userService.js          # Lógica de negocio para usuarios
│   │   ├── videoService.js         # Lógica de negocio para videos
│   │   ├── dbService.js            # Configuración de base de datos
│   ├── config/          # Configuraciones generales
│   │   ├── dbConfig.js             # Configuración de la conexión a la base de datos
│   │   ├── swaggerConfig.js        # Configuración para Swagger
│   ├── middlewares/     # Middleware personalizados
│   │   ├── errorHandler.js         # Manejo de errores
│   │   ├── authMiddleware.js       # Middleware de autenticación JWT
│   ├── utils/           # Utilidades generales
│   │   ├── responseHelper.js       # Utilidad para formatear respuestas
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

## Cómo Ejecutar el Servidor Localmente

Sigue estos pasos para ejecutar el servidor localmente en tu máquina:

1. Clona el repositorio: Si aún no lo has hecho, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/guia-del-programador-backend.git
cd guia-del-programador-backend
```

2. Instala las dependencias: Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

3. Configura las variables de entorno: Crea un archivo .env basado en el archivo .env.example que se incluye en el proyecto. Asegúrate de incluir las credenciales correctas para tu base de datos MySQL:

```bash
cp .env.example .env
```

Abre el archivo .env y ajusta las variables como DB_HOST, DB_USER, DB_PASSWORD, DB_NAME según tu configuración de base de datos local.

4. Ejecuta el servidor: Una vez que las dependencias estén instaladas y las variables de entorno configuradas, ejecuta el servidor con el siguiente comando:

```bash
npm start
```

El servidor se ejecutará en http://localhost:3000 por defecto.

5. Accede a la documentación Swagger: Para explorar la documentación interactiva de la API, abre tu navegador y ve a:

```bash
http://localhost:3000/api/v1/docs
```
