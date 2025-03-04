const express = require("express");
const path = require("path");

const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware to serve static files (optional)
app.use(express.static(path.join(__dirname, "views")));

// Use routes
app.use("/api/products", productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
