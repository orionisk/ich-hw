import express from 'express';
import { pool } from './db.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_, res) => {
  try {
    res.send('Hello, World!');
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/', (req, res) => {
  console.log(req.body);
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'No data provided' });
  }
  res.json({ message: 'Data received', data: req.body });
});

app.get('/products', async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.post('/products', async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO products (name, price) VALUES (?, ?)',
      [name, price]
    );
    res.status(201).json({
      message: 'Product added successfully',
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});

app.use((req, res, next) => {
  if (req.method === 'GET') {
    return res.status(404).json({
      error: 'Not Found',
      message: `Route ${req.url} not found`
    });
  }
  next();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
