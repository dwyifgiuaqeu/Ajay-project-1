const express = require("express");
const { handleGenerateNewShortURL } = require("../controllers/url");

const router = express.Router();

// Route to handle URL shortening
router.post("/", handleGenerateNewShortURL);

module.exports = router;

