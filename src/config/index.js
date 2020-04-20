const ENV = process.env;
const envName = ENV.NODE_ENV === 'PROD' ? 'prod': 'dev';

require('dotenv').config({ path: `src/config/${envName}.env` });

module.exports = {
  BOT_TOKEN: ENV.BOT_TOKEN,
  MONGO_URI: ENV.MONGO_URI,
  REDIS_HOST: ENV.REDIS_HOST,
  REDIS_PORT: ENV.REDIS_PORT,
};
