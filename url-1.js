const mongoose = require("mongoose");
const shortid = require("shortid");

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
    default: shortid.generate, // Generates a unique short ID if not provided
  },
  redirectURL: {
    type: String,
    required: true,
  },
  visitHistory: [{ timestamp: { type: Number } }],   //visit history me ek array hhh jisme ham pata lga sakte h ki kitne baje cliick huwa tha
  
}, { timestamps: true });

const URL = mongoose.model("url", urlSchema);
module.exports = URL;
