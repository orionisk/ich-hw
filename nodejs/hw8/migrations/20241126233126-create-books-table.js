'use strict';

import { getBookSchema } from '../schema/bookSchema.js';

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', getBookSchema(Sequelize));
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Books');
  }
};
