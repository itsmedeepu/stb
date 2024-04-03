const mongoose = require("mongoose");

const StbSchema = mongoose.Schema({
  stbid: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const StbModel = mongoose.model("stb", StbSchema);

module.exports = StbModel;
