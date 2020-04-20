const Redis = require('ioredis');

const logger = require('../logger');

const init = () =>
  new Redis({
    port: 6379,
    host: '127.0.0.1',
  });

module.exports.get = async (key) => {
  logger.info(`Trying to get item from redis by key - ${key}`);

  const result = await init().get(key);

  try {
    return JSON.parse(result);
  } catch {
    return result;
  }
};

