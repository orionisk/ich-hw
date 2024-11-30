import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (!password || !user.password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { newPassword } = req.body;

    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await user.update({
      password: hashedPassword,
      mustChangePassword: false
    });

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const { password } = req.body;
    const isMatch = await bcrypt.compare(password, req.user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    await req.user.destroy();
    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const changeEmail = async (req, res) => {
  try {
    const { newEmail, password } = req.body;

    const isMatch = await bcrypt.compare(password, req.user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    const existingUser = await User.findOne({ where: { email: newEmail } });

    if (existingUser?.email === req.user.email) {
      return res
        .status(400)
        .json({ error: 'New email cannot be the same as the current email' });
    }

    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    await req.user.update({ email: newEmail });
    res.json({ message: 'Email updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
