const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  name: String,
  message: String,
  imagepfp: String, 
});

module.exports = mongoose.model('Message', MessageSchema);