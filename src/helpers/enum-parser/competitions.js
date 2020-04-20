const redis = require('../redis');

module.exports = async (countryCode) => {
  const competitions = await redis.get(`[wca:country:${countryCode}]`);

  const keyboard = competitions.map((competition) => [[competition.name, competition.id]]);
  return keyboard.sort((a, b) => (a[0][0] > b[0][0] ? 1 : -1));
};
