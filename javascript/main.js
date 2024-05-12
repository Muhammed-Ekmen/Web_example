// Select all navbar links
const navLinks = document.querySelectorAll(".navbar a");

// Function to handle click event
function handleClick(event) {
  // Prevent default link behavior
  event.preventDefault();

  // Get the ID of the section associated with the clicked link
  const sectionId = this.getAttribute("href").substring(1);

  // Log the ID of the section to the console
  console.log(`Tiklanan Section ID'si ${sectionId}`);
}

// Attach click event listener to each navbar link
navLinks.forEach((link) => {
  link.addEventListener("click", handleClick);
});
