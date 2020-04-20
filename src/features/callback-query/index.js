const { flag, name } = require('country-emoji');

const { User } = require('../../models');
const { enums, telegram, parser, db, utils } = require('../../helpers');

const getDataFromQuery = (query) => query.split('_').pop();

module.exports = async ({ data: callbackData, message }) => {
  if (callbackData.startsWith(enums.PREFIXES.SET_LANGUAGE)) {
    const userLang = getDataFromQuery(callbackData).toLowerCase();

    await db.saveUser(message, userLang);

    return [
      telegram.hideInlineKeyboard(message.message_id),
      telegram.pause(200),
      telegram.sendText(enums.greeting, userLang),
    ];
  }

  const user = await User.get(message.chat.id);
  const userLang = user.language;

  switch (true) {
    case callbackData === enums.PREFIXES.CHOOSE_COMPETITION: {
      const keyboard = await parser.getCompetitionCountries();
      const competitionCountries = enums.competitionCountries(keyboard);

      return [
        telegram.hideInlineKeyboard(message.message_id),
        telegram.pause(200),
        telegram.sendText(competitionCountries, userLang),
      ];
    }

    case callbackData.startsWith(enums.PREFIXES.CHOOSE_COMPETITION_COUNTRY): {
      const countryCode = getDataFromQuery(callbackData);
      const countryName = utils.formatCountryName(countryCode);
      const keyboard = await parser.getCompetitionsKeyboard(countryCode);
      const competitions = enums.competitions(keyboard, countryName);

      return [
        telegram.hideInlineKeyboard(message.message_id),
        telegram.pause(200),
        telegram.sendText(competitions, userLang, enums.backButton(enums.PREFIXES.CHOOSE_COMPETITION)),
      ];
    }

    case callbackData.startsWith(enums.PREFIXES.COMPETITION): {
      const competitionId = getDataFromQuery(callbackData);
      console.log(competitionId);

      return [
        telegram.hideInlineKeyboard(message.message_id),
        telegram.pause(200),
        telegram.sendText(enums.userRole, userLang),
      ];
    }
  }
};
