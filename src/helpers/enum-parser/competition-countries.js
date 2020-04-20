const { name } = require('country-emoji');

const redis = require('../redis');
const { formatCountryName } = require('../utils');

module.exports = async () => {
  const countryCodes = await redis.get('[wca:countries:all]');
  const excludedCountries = [];

  const normalCountries = countryCodes.reduce((prev, countryCode) => {
    const countryName = name(countryCode);

    if (!countryName) {
      excludedCountries.push({
        name: countryCode,
        code: countryCode,
      });
    } else {
      prev.push({
        name: countryName,
        code: countryCode,
      });
    }

    return prev;
  }, []);

  const sortedCountries = normalCountries.sort((a, b) => (a.name > b.name ? 1 : -1));
  const allCountries = [...excludedCountries, ...sortedCountries];

  const keyboard = allCountries.map((country) => [[formatCountryName(country.code), country.code]]);

  return keyboard;
};
