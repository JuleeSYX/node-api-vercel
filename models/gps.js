const mongoose = require("mongoose");

const GpsSchema = new mongoose.Schema({
  userId: {
    type: Number,
    default: 0,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
});

const Gps = mongoose.model("Gps", GpsSchema);

module.exports = Gps;