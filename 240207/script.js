const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".modal");
console.log("gnb");

trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  if (gnb.style.display === "none" || gnb.style.display === "") {
    gnb.style.display = "block";
  } else {
    gnb.style.display = "none";
  }
});
