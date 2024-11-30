import 'dotenv/config';
import express from 'express';
import { ObjectId } from 'mongodb';
import { connectDB } from './db/index.js';
import { validateProduct } from './middlewares/validateProduct.js';

const app = express();
app.use(express.json());

const startServer = async () => {
  const db = await connectDB();
  const products = db.collection('products');

  app.post('/products', validateProduct, async (req, res) => {
    try {
      const { name, price, description } = req.body;
      const result = await products.insertOne({
        name: name.trim(),
        price,
        description: description.trim(),
        createdAt: new Date()
      });
      res.status(201).json({ id: result.insertedId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/products', async (req, res) => {
    try {
      const allProducts = await products.find().toArray();
      res.json(allProducts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/products/:id', async (req, res) => {
    try {
      const product = await products.findOne({
        _id: new ObjectId(req.params.id)
      });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.put('/products/:id', async (req, res) => {
    try {
      const { name, price, description } = req.body;
      const result = await products.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { name, price, description } }
      );
      if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete('/products/:id', async (req, res) => {
    try {
      const result = await products.deleteOne({
        _id: new ObjectId(req.params.id)
      });
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer().catch(console.error);
