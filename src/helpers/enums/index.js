const PREFIXES = {
  SET_LANGUAGE: 'SET_LANGUAGE_',
  CHOOSE_COMPETITION: 'CHOOSE_COMPETITION_',
  CHOOSE_COMPETITION_COUNTRY: 'CHOOSE_COMPETITION_COUNTRY_',
  COMPETITION: 'COMPETITION_',
};

module.exports.PREFIXES = PREFIXES;

module.exports.backButton = (callback) => ({
  keyboardPrefix: callback,
  ua: '« Повернутись назад',
});

module.exports.start = {
  keyboardPrefix: PREFIXES.SET_LANGUAGE,
  text: 'Before we start, choose a language to communicate with me',
  keyboard: [[['🇺🇦 Українська', 'UA']]],
};

module.exports.greeting = {
  keyboardPrefix: PREFIXES.CHOOSE_COMPETITION,
  ua: {
    text: 'Привіт, я WCA бот! Я створений, щоб допомогти вам під час змагань.',
    keyboard: [[['🌎 Обрати змагання']]],
  },
};

module.exports.competitionCountries = (keyboard) => ({
  keyboard,
  keyboardPrefix: PREFIXES.CHOOSE_COMPETITION_COUNTRY,
  ua: {
    text: 'Оберіть країну ваших змагань',
  },
});

module.exports.competitions = (keyboard, countryName) => ({
  keyboard,
  keyboardPrefix: PREFIXES.COMPETITION,
  ua: {
    text: `Оберіть змагання, яке вас цікавить.\nКраїна - ${countryName}`,
  },
});

module.exports.userRole = {
  keyboardPrefix: 'CHOOSE_USER_ROLE_',
  ua: {
    text: 'Представтеся, будь ласка.',
    keyboard: [[['Я - WCA делегат/організатор', 'ADMIN']], [['Я - учасник/гість', 'SIMPLE']]],
  },
};
