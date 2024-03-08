const items = document.querySelectorAll("article");
console.log(items);

for (let item of items) {
  item.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelector("video").play();
  });
  item.addEventListener("mouseout", (e) => {
    e.currentTarget.querySelector("video").pause();
  });
}
