const { Schema, model } = require('mongoose');

const User = new Schema({
  password: { type: String, require: true },
  email: { type: String, require: true },
  name: { type: String, default: '' },
  secondName: { type: String, default: '' },
  avatar: { type: String, default: '' },
  bithday: { type: String, default: '' },
  gender: { type: String, default: '' },
  phone: { type: String, default: '' },
  city: { type: String, default: '' },
  country: { type: String, default: '' },
  activationLink: { type: String },
  forgotPasswordLink: { type: String },
  forgotPassword: { type: String },
  isActiveEmail: false,
});

module.exports = model('User', User);
