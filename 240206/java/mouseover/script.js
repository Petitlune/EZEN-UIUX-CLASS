const items = document.querySelectorAll(".navi li");
console.log(items);
const photo = document.querySelector(".photo");
console.log(photo);

items.forEach((item) => {
  item.addEventListener("mouseover", function () {
    const changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = "url(${changeImage})";
  });
  item.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = "";
  });
});
