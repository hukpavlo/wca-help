const mongoose = require('mongoose');

const { SCHEMA_NAMES } = require('../const');

const CompetitionSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
      enum: ['simple', 'admin'],
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    id: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true, strict: true },
);

module.exports = mongoose.model(SCHEMA_NAMES.COMPETITION, CompetitionSchema);
