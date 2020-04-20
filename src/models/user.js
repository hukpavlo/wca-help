const mongoose = require('mongoose');

const { SCHEMA_NAMES } = require('../const');

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      unique: true,
      required: true,
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    language: {
      type: String,
      enum: ['ua'],
    },
    competition: {
      type: mongoose.Schema.ObjectId,
      ref: SCHEMA_NAMES.COMPETITION,
    },
  },
  { timestamps: true, strict: true },
);

const User = mongoose.model(SCHEMA_NAMES.USER, UserSchema);

User.get = (userId) => User.findOne({ userId }).exec();
User.update = (userId, updateObj) => User.findOneAndUpdate({ userId }, updateObj).exec();

module.exports = User;
