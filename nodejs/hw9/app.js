import express from 'express';
import 'dotenv/config';
import { sequelize } from './config/database.js';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';

const app = express();
app.use(express.json());

app.use(authRoutes);
app.use(adminRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
}

startServer();
