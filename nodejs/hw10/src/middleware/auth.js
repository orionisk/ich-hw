import jwt from 'jsonwebtoken';
import { findUserById } from '../db/users.js';

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export const authorizeAdmin = (req, res, next) => {
  const currentUser = findUserById(req.user.id);

  if (!currentUser || currentUser.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  next();
};
