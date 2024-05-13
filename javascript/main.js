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
