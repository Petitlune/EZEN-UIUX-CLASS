const icons = document.querySelectorAll(".sns a");
//target을 쓰면 망함
for (let icon of icons) {
  icon.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelector(".fa-brands").classList.add("active");
  });
  icon.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector(".fa-brands").classList.remove("active");
  });
}
