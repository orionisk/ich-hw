import { User } from '../models/User.js';

export const passwordChangeStatus = async (req, res, next) => {
  const originalJson = res.json;

  try {
    const user =
      req.user || (await User.findOne({ where: { email: req.body.email } }));

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json = function (data) {
      if (user?.mustChangePassword) {
        return originalJson.call(this, {
          ...data,
          requiresPasswordChange: true,
          redirectTo: '/change-password-page'
        });
      }

      return originalJson.call(this, data);
    };
    next();
  } catch (error) {
    console.error('Error in passwordChangeStatus middleware:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
