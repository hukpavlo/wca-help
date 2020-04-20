const { User } = require('../../models');

module.exports = async (message, language) => {
  const userId = message.chat.id;

  const user = User.get(userId);

  if (user) {
    return User.update(userId, { language });
  }

  const newUser = new User({
    language,
    userId: message.chat.id,
    firstName: message.chat.first_name,
    lastName: message.chat.last_name || '',
  });

  return newUser.save();
};
