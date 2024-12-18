const mongoose = require('mongoose')

const jukeBoxSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: String
})

const JukeBox = mongoose.model('JukeBox', jukeBoxSchema)

module.exports = JukeBox
