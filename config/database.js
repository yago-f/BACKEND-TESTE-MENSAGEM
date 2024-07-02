require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'admin_dev',
  process.env.ADMINTESTE_USERNAME,
  process.env.ADMINTESTE_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432',
    logging: false,
    pool: {
      max: 20,
      min: 1,
    }
  }
);

const Integrador = require('../models/integrador')(sequelize, DataTypes);
const IntegradorInpera = require('../models/IntegradorInpera')(sequelize, DataTypes);

const db = {
  sequelize,
  Sequelize,
  Integrador,
  IntegradorInpera,
};

module.exports = db;
