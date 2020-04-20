const { flag, name } = require('country-emoji');

module.exports.formatCountryName = (countryCode) => {
  const countryName = name(countryCode);

  if (!countryName) return `🌐 ${countryCode}`;

  return `${flag(countryCode)} ${countryName}`;
};
