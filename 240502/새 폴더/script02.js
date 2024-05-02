const titles = document.querySelectorAll(".title");

titles.forEach((it) => {
  it.addEventListener("click", function () {
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    this.classList.toggle("active");
  });
});
