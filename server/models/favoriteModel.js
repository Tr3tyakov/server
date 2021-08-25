const { Schema, model } = require('mongoose');

const Favorite = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  list: [{ type: Schema.Types.ObjectId, ref: 'Vacancy' }],
});

module.exports = model('Favorite', Favorite);
