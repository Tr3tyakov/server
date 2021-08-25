const { Schema, model } = require('mongoose');

const Vacancy = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  email: { type: String },
  phone: { type: Number },
  info: {
    userName: { type: String },
    title: { type: String, require: true },
    city: { type: String },
    specializations: [{ type: String }],
    startSalary: { type: Number },
    endSalary: { type: Number },
    currency: { type: String },
    date: { type: Date, default: Date.now },
  },
  address: { type: String },
  subtitleSalary: { type: String },
  description: { type: String },
  skills: [{ type: String }],
  typeDriverLicense: [{ type: String }],
  workExperiences: [{ type: String }],
  schedule: [{ type: String }],
  typeEmployment: [{ type: String }],
});

Vacancy.index({ 'info.title': 'text' });
Vacancy.index({ 'info.startSalary': 'salary' });
Vacancy.index({ 'info.city': 'city' });
module.exports = model('Vacancy', Vacancy);
