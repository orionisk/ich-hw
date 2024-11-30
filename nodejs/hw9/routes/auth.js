import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { passwordChangeStatus } from '../middleware/passwordChangeStatus.js';
import {
  register,
  login,
  changePassword,
  deleteAccount,
  changeEmail
} from '../controllers/authController.js';

const router = Router();

router.post('/register', register);
router.post('/login', passwordChangeStatus, login);
router.post('/change-password', auth, changePassword);
router.post('/delete-account', auth, deleteAccount);
router.post('/change-email', [auth, passwordChangeStatus], changeEmail);

export default router;
