import { Router } from 'express';
import { authenticateJWT, authorizeAdmin } from '../middleware/auth.js';
import { updateUser, deleteUser, findUserById } from '../db/users.js';

const router = Router();

router.put('/update-email', authenticateJWT, (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const updatedUser = updateUser(req.user.id, { email });
  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ message: 'Email updated successfully', email: updatedUser.email });
});

router.delete('/delete-account', authenticateJWT, (req, res) => {
  const user = findUserById(req.user.id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  deleteUser(req.user.id);
  res.json({ message: 'Account deleted successfully' });
});

router.put('/update-role', authenticateJWT, authorizeAdmin, (req, res) => {
  const { userId, role } = req.body;

  if (!userId || !role) {
    return res.status(400).json({ message: 'User ID and role are required' });
  }

  const updatedUser = updateUser(userId, { role });
  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ message: 'Role updated successfully', user: updatedUser });
});

export default router;
