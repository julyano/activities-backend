require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DRIVER,
    "port": process.env.DB_LOCAL_PORT
  },
  "test": {
    "username": process.env.DB_USER_TEST,
    "password": process.env.DB_PASSWORD_TEST,
    "database": process.env.DB_NAME_TEST,
    "host": process.env.DB_HOST_TEST,
    "dialect": process.env.DB_DRIVER_TEST,
    "port": process.env.DB_LOCAL_PORT_TEST
  },
  "production": {
    "username": process.env.DB_USER_PROD,
    "password": process.env.DB_PASSWORD_PROD,
    "database": process.env.DB_NAME_PROD,
    "host": process.env.DB_HOST_PROD,
    "dialect": process.env.DB_DRIVER_PROD,
    "port": process.env.DB_LOCAL_PORT_PROD
  }
};
