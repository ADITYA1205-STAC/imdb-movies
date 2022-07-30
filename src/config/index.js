require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  IMDB_API_KEY: process.env.IMDB_API_KEY,
  IMBD_URL: process.env.IMBD_URL,
  IMDB_HOST: process.env.IMDB_HOST,
}