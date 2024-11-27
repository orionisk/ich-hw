const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const getAppSchema = require('../schema/appSchema');

const App = sequelize.define('App', getAppSchema(DataTypes), {
  tableName: 'Apps',
  timestamps: false
});

module.exports = App;
