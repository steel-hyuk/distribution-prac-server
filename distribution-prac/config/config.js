const dotenv = require('dotenv')
dotenv.config()

const config = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'test',
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    port: process.env.DATABASE_PORT
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'test',
    host: process.env.DATABASE_HOST,
    dialect: 'mysql'
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'test',
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    port: process.env.DATABASE_PORT
  }
}

module.exports = config