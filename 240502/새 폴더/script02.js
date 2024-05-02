const titles = document.querySelectorAll(".title");

titles.forEach((it) => {
  it.addEventListener("click", function () {
    const content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display === "block";
    } else {
      content.style.display === "none";
    }
    this.classList.toggle("active");
  });
});
