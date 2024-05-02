const titles = document.querySelectorAll(".title");
const contents = document.querySelectorAll(".content");

contents[0].style.display = "block";

// titles.forEach((tit, i) => {
//   tit.addEventListener("click", () => {
//     titles.forEach((it, i) => {
//       it.classList.remove("active");
//       contents[i].classList.remove("active");
//     });

//     tit.classList.add("active");
//     contents[i].classList.add("active");
//   });
// });

titles.forEach((tit) => {
  tit.addEventListener("click", function () {
    const content = this.nextElementSibling;
    console.log(content);
    const allTit = this.parentNode.querySelectorAll(".title");
    const allContents = this.parentNode.querySelectorAll(".content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
    this.classList.toggle("active");

    allTit.forEach((item) => {
      if (item !== tit) {
        item.classList.remove("active");
      }
    });
    allContents.forEach((it) => {
      if (it !== content) {
        it.style.display = "none";
      }
    });
  });
});
