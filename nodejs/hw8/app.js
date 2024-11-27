import express from 'express';
import Book from './models/book.js';
import sequelize from './config/db.js';

const app = express();
app.use(express.json());

app.get('/books', async (_, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/books', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    await Book.update(req.body, {
      where: { id: req.params.id }
    });

    const updatedBook = await Book.findByPk(req.params.id);
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const deleted = await Book.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
}

startServer();
