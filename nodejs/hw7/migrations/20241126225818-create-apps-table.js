'use strict';
const getAppSchema = require('../schema/appSchema');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Apps', getAppSchema(Sequelize));
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Apps');
  }
};
