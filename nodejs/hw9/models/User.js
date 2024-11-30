import { sequelize } from '../config/database.js';
import { userSchema } from '../schemas/userSchema.js';

export const User = sequelize.define('User', userSchema, {
  timestamps: false
});
