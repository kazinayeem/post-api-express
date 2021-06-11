const mongoose = require("mongoose");

const todoschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
 
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = todoschema;
