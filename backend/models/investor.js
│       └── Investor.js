const mongoose = require("mongoose");

const InvestorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model("Investor", InvestorSchema);