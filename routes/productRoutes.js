const express = require("express");
const path = require("path");
const router = express.Router();

// GET request to serve productForm.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/productForm.html"));
});

module.exports = router;

