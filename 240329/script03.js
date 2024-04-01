const navBtn = document.querySelector("#nav_icon div");
const navBar = document.querySelector(".nav");

navBtn.addEventListener("click", () => {
  console.log("click");
  navBtn.classList.toggle("active");
  navBar.classList.toggle("active");
});

//slider
const sLeftBtn = document.querySelector(".left");
const sRightBtn = document.querySelector(".right");
const sIcons = document.querySelectorAll(".slide_icons li");
const sImgs = document.querySelectorAll(".sec2_slider li");
const sBgImg = document.querySelector("#sec2");

const s_reset = () => {
  sImgs.forEach((img, idx) => {
    sImgs[idx].classList.remove("on");
    sIcons[idx].classList.remove("active");
  });
};

sIcons.forEach((li) => {
  li.addEventListener("click", (e) => {
    const target = e.target.dataset.index;
    s_reset();
    if ((li.tabName = "LI")) {
      for (let i = 0; i < sIcons.length; i++) {
        if (target == i) {
          sImgs[i].classList.add("on");
          sIcons[i].classList.add("active");
          sBgImg.style.backgroundImage = `url(./portfolio/img/sec2_bg_${i}.png)`;
        }
      }
    }
  });
});

const next = (e) => {
  e.preventDefault();
  const crtSlide = document.querySelector(".sec2_slider li.on");
  let i = crtSlide.dataset.index;
  s_reset();
  i++;
  if (i >= sImgs.length) {
    i = 0;
  }
  sImgs[i].classList.add("on");
  sIcons[i].classList.add("active");
  sBgImg.style.backgroundImage = `url(./portfolio/img/sec2_bg_${i}.png)`;
};

sRightBtn.addEventListener("click", next);

const prev = (e) => {
  e.preventDefault();
  const crtSlide = document.querySelector(".sec2_slider li.on");
  let i = crtSlide.dataset.index;
  s_reset();
  i--;
  if (i < 0) {
    i = sImgs.length - 1;
  }
  sImgs[i].classList.add("on");
  sIcons[i].classList.add("active");
  sBgImg.style.backgroundImage = `url(./portfolio/img/sec2_bg_${i}.png)`;
};

sLeftBtn.addEventListener("click", prev);

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

const sec1 = () => {
  const tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: ".g01",
    height: "80%",
  })
    .add({
      targets: ".g02",
      height: "70%",
    })
    .add({
      targets: ".g03",
      height: "60%",
    })
    .add({
      targets: ".g04",
      height: "85%",
    });
};

const sec1_reset = () => {
  anime({
    targets: ".gage_in",
    height: "0%",
  });
};

const sec2 = () => {
  const tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: "#sec2 h1",
    opacity: 1,
    translateY: 50,
  }).add({
    targets: ".slide_wrap",
    opacity: 1,
    translateY: 50,
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
    if (new_elem.index === 1) {
      sec1();
    }
    if (old_elem.index === 1) {
      sec1_reset();
    }
    if (new_elem.index === 2) {
      sec2();
    }
  },
});
