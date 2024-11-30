import express from 'express';
import { config } from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';

config();

const app = express();
app.use(express.json());

app.use(authRoutes);
app.use(userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
