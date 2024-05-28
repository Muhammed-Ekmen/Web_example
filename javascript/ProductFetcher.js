// ProductFetcher.js

class ProductFetcher {
  static fetchProducts() {
    return fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }
}

export default ProductFetcher;
