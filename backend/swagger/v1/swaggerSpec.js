// swagger/swaggerSpec.js

// Importar la información general de la API y configuraciones de los servidores
import info from './info.js';
import servers from './servers.js';

// Importar las rutas de la API

// Importar los esquemas de los modelos (schemas)

// Importar los esquemas de seguridad

// Definición del objeto swaggerSpec con la configuración de la API

const swaggerSpec = {
    openapi: '3.0.0',
    servers,
    paths: {
    },
    components: {
        schemas: {
        },
        securitySchemes: {
        }
    }
};

export default swaggerSpec;