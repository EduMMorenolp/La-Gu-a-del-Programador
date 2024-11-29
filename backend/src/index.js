import dotenv from 'dotenv';
import app from './app.js';
import { createConnection } from './config/dbConfig.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // Conectar a la base de datos
        const dbConnection = await createConnection();
        global.dbConnection = dbConnection;

        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log('\n==================================================');
            console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
            console.log(`📃 Swagger Docs: http://localhost:${PORT}/api-docs`);
            console.log('==================================================\n');
        });
    } catch (error) {
        console.error('❌ Error al iniciar el servidor:', error.message);
        process.exit(1);
    }
};

startServer();