import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import { getBookSchema } from '../schema/bookSchema.js';

const Book = sequelize.define('Book', getBookSchema(DataTypes), {
  tableName: 'Books',
  timestamps: false
});

export default Book;
