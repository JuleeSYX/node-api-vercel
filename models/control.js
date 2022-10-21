const mongoose = require("mongoose");

const ControlSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
});

const Control = mongoose.model("Control", ControlSchema);

module.exports = Control;