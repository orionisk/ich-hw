const getAppSchema = Sequelize => ({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = getAppSchema;
