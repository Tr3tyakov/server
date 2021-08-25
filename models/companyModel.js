const { Schema, model } = require('mongoose');

const Company = new Schema({
  title: { type: String, require: true },
  image: { type: String, require: true },
  vacancies: [{ type: Schema.Types.ObjectId, ref: 'work' }],
});

module.exports = model('Company', Company);
