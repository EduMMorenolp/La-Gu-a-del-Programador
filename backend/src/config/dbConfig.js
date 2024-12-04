import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const DB_HOST = process.env.DB_HOST || localhost;
const DB_NAME = process.env.DB_NAME || root;
const DB_USER = process.env.DB_USER || root;
const DB_PASSWORD = process.env.DB_PASSWORD || guiadelprogramador;

export const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      database: DB_NAME,
      password: DB_PASSWORD,
    });

    console.log('✅ Conexión exitosa a la base de datos');
    return connection;
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error.message);
    throw error; // TODO: handlear con el middleware de errores
  }
};
