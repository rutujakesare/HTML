const express = require("express");
const path = require("path");
const router = express.Router();

// Serve HTML form
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/productForm.html"));
});

// Handle POST request
router.post("/", (req, res) => {
    const { productName } = req.body;
    console.log("Received Product:", productName);

    res.json({ message: "Product added successfully!", productName });
});

module.exports = router;


