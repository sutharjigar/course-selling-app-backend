require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.DB_URI;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

module.exports = {
  PORT,
  MONGO_URL,
  JWT_ADMIN_PASSWORD,
  JWT_USER_PASSWORD,
};
