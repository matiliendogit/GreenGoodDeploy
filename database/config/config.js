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
    username: process.env.MYSQL_USER || "root",  // Use MYSQL_USER instead of MYSQLUSER
    password: process.env.MYSQL_PASSWORD || "GreenGoodPass",
    database: process.env.MYSQL_DATABASE || "greengood_db",
    host: process.env.MYSQL_HOST || "127.0.0.1",
    port: process.env.MYSQL_PORT || "",
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