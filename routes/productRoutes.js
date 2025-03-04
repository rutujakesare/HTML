const express = require("express");
const path = require("path");
const router = express.Router();

// GET request to serve products.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/products.html"));
});

module.exports = router;
