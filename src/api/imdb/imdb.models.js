const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  generas: [String],
}, {
  timestamps: true,
  versionKey: false
});

MovieSchema.index({ rating: -1, year: 1 });

module.exports = model('movies', MovieSchema);