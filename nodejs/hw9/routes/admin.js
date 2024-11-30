import { Router } from 'express';
import { auth, adminOnly } from '../middleware/auth.js';

const router = Router();

router.get('/admin', auth, adminOnly, async (req, res) => {
  res.json({ message: 'Welcome to admin panel' });
});

export default router;
