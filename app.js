const express = require("express");
const path = require("path");
// const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware

app.use(bodyParser.json());
app.use(express.static("public")); // Serve frontend scripts

// Use routes
app.use("/api/products", productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

