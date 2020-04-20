const mongoose = require('mongoose');

const config = require('../config');
const textHandler = require('./text');
const defaultHandler = require('./default');
const stickerHandler = require('./sticker');
const callbackQueryHandler = require('./callback-query');

const { logger } = require('../helpers');

module.exports = async (webhook) => {
  logger.info(webhook);

  await mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  const { message, callback_query: callbackQuery } = webhook.originalRequest;

  if (message) {
    if (message.text) {
      return textHandler(message);
    }

    if (message.sticker) {
      return stickerHandler(message);
    }
  } else if (callbackQuery) {
    return callbackQueryHandler(callbackQuery);
  }

  return defaultHandler();
};
