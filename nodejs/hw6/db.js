import mysql from 'mysql2/promise';

const initialPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root'
});

try {
  await initialPool.query('CREATE DATABASE IF NOT EXISTS product_db');
  await initialPool.end();
} catch (error) {
  console.error('Error creating database:', error);
  await initialPool.end();
  throw error;
}

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'product_db'
});
