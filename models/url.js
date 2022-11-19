const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
  url_origin: {
    type: String,
    required: true
  },
  url_shorten: {
    type: String,
    required: true
  },
  keywords: {
    type: String,
  }
})

module.exports = mongoose.model('Url', urlSchema)