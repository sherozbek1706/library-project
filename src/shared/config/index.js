const dotenv = require("dotenv");

dotenv.config();

const config = {
  port: process.env.PORT,
  db: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};

module.exports = config;
