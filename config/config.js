const path = require('path');
require('dotenv').config({path: path.join(process.cwd(), '.env')});

module.exports = {
  development: {
    database: 'admin_dev',
    username: `${process.env.ADMINTESTE_USERNAME}`,
    password: `${process.env.ADMINTESTE_PASSWORD}`,
    options: {
      host: 'localhost',
      port: '5432',
      dialect: 'postgres',
      logging: false,
      pool: {
        max: 20,
        min: 1,
      },
    },
  },
  // test: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_DATABASE_TEST,
  //   host: process.env.DB_HOST,
  //   dialect: process.env.DB_DIALECT,
  // },
  // production: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_DATABASE_PRODUCTION,
  //   host: process.env.DB_HOST,
  //   dialect: process.env.DB_DIALECT,
  // },
};
