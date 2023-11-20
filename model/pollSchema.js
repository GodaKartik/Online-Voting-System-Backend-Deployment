const mongoose = require("mongoose");
const pollSchema = new mongoose.Schema(
  {
    pollTitle: { type: String },
    pollDesc: { type: String },
    candidates: { type: Array },
  },
  { collection: "polls" }
);

module.exports = mongoose.model("pollSchema", pollSchema);
