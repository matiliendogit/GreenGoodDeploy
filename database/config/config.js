/*module.exports = {
  "development": {
    "username": "root",
    "password": "GreenGoodPass",
    "database": "greengood_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
*/

const config = {
  development: {
    username: process.env.MYSQL_USER,  // Use MYSQL_USER instead of MYSQLUSER
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: '',
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: '',
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}

module.exports =  config;