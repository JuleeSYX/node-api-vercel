const mongoose = require("mongoose");

const TimeLineSchema = new mongoose.Schema({
  lat: {
    type: Number,
    default: 0,
  },
  lg: {
    type: Number,
    default: 0,
  },
});

const TimeLine = mongoose.model("TimeLine", TimeLineSchema);

module.exports = TimeLine;