// swagger/v1/main.js

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerSpec.js';

const setupSwaggerV1 = (app) => {
    // Ruta donde se sirve la documentación de la API
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwaggerV1;