document.getElementById("productForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const productName = document.getElementById("product").value;

    try {
        const response = await axios.post("/api/products", { productName });
        console.log("Server Response:", response.data);
        alert("Product added successfully!");
    } catch (error) {
        console.error("Error adding product:", error);
    }
});
