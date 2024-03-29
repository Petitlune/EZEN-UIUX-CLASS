const navBtn = document.querySelector("#nav_icon div");
const navBar = document.querySelector(".nav");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  navBar.classList.toggle("active");
});

//anime
const sec0 = () => {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 5000,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
};
//fullpage
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  navigation: true,

  afterLoad: (old_elem, new_elem) => {
    if (new_elem.index === 0) {
      sec0();
    }
  },
});
