function handleClick(event) {
  event.preventDefault();

  const sectionId = this.getAttribute("href").substring(1);

  console.log(`Clicked on ${sectionId}`);

  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}

// main.js

import ProductFetcher from "./ProductFetcher.js";

ProductFetcher.fetchProducts().then((data) => {
  console.log("fetch");
  console.log(data);
  const productTableBody = document.querySelector("#product-table tbody");
  // Loop through the array of products and create table rows to display their details
  data.forEach((product) => {
    const row = document.createElement("tr");
    // Create table cells for image, title, price, and description
    const imageCell = document.createElement("td");
    const titleCell = document.createElement("td");
    const priceCell = document.createElement("td");
    const descriptionCell = document.createElement("td");
    // Create image element and set its attributes
    const image = document.createElement("img");
    image.width = 250;
    image.height = 250;
    image.src = product.image;
    image.alt = product.title;
    // Set other cell content
    titleCell.textContent = product.title;
    priceCell.textContent = "$" + product.price;
    descriptionCell.textContent = product.description;
    // Append cells to the row
    imageCell.appendChild(image);
    row.appendChild(imageCell);
    row.appendChild(titleCell);
    row.appendChild(priceCell);
    row.appendChild(descriptionCell);
    // Append row to the table body
    productTableBody.appendChild(row);
  });
});
