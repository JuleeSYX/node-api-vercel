const mongoose = require("mongoose");

const Sim800lSchema = new mongoose.Schema({
  lat: {
    type: Number,
    default: 0,
  },
  lng: {
    type: Number,
    default: 0,
  },
});

const Sim800l = mongoose.model("Sim800l", Sim800lSchema);

module.exports = Sim800l;