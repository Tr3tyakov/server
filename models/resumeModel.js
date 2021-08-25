const { Schema, model } = require('mongoose');

const Resume = new Schema({
  languages: [
    { mainLanguage: String, additionLanguages: [{ language: String, knowledge: String }] },
  ],
  skills: [{ type: String }],
  typeLicense: {
    haveCar: { type: Boolean || String },
    typeCategory: [{ type: String }],
  },
  education: { type: String },
  specializations: [{ type: String }],
  desiredPosition: { type: String },
  desiredPay: { type: Number },
  aboutMe: { type: String },
  date: { type: Date, default: Date.now },
  mainInfo: {
    email: { type: String, require: true },
    name: { type: String, require: true },
    secondName: { type: String, require: true },
    avatar: { type: String, default: '' },
    bithday: { type: String, default: '' },
    gender: { type: String, require: true },
    phone: { type: String, require: true },
    city: { type: String, require: true },
    country: { type: String, require: true },
  },
});

module.exports = model('Resume', Resume);
