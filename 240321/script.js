const circle = document.querySelector("#circle");
const articles = document.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
console.log(circle, articles);
