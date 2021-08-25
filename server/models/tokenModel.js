const { Schema, model } = require('mongoose');

const RefreshToken = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, require: true },
});

module.exports = model('RefreshToken', RefreshToken);
