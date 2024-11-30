export const validateProduct = (req, res, next) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({
      error:
        'Missing required fields: name, price, and description are required'
    });
  }

  if (typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({
      error: 'Name must be a string with at least 2 characters'
    });
  }

  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({
      error: 'Price must be a positive number'
    });
  }

  if (typeof description !== 'string' || description.trim().length < 10) {
    return res.status(400).json({
      error: 'Description must be a string with at least 10 characters'
    });
  }

  next();
};
