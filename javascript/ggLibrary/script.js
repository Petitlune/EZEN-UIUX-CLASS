const hiddenMenues = document.querySelectorAll(".sec");
const menuLists = document.querySelectorAll(".nav-menu a");
const hiddenMenueAll = document.querySelector(".hidden-menu");
const menuBtn = document.querySelector(".menu-btn");
const libraryOpen = document.querySelector(".top-sec img");
const libraryClose = document.querySelector(".close-btn");
const libraryModal = document.querySelector(".library-modal");

//nav-bar
menuLists.forEach((list, i) => {
  list.addEventListener("mouseenter", () => {
    hiddenMenues[i].classList.add("active");
    hiddenMenueAll.classList.add("active");
    menuBtn.classList.add("active");
  });
  list.addEventListener("mouseleave", () => {
    hiddenMenues[i].classList.remove("active");
    hiddenMenueAll.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});

hiddenMenues.forEach((menu, i) => {
  menu.addEventListener("mouseenter", () => {
    menuLists[i].classList.add("active");
    hiddenMenueAll.classList.add("active");
    menuBtn.classList.add("active");
  });
  menu.addEventListener("mouseleave", () => {
    menuLists[i].classList.remove("active");
    hiddenMenueAll.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  hiddenMenueAll.classList.toggle("active");
});

libraryOpen.addEventListener("click", () => {
  libraryModal.classList.add("active");
});
libraryClose.addEventListener("click", () => {
  libraryModal.classList.remove("active");
});

const bannerWrap = document.querySelector(".link-right");
const bannerBox = document.querySelector(".bannerAll");
const banner = document.querySelectorAll(".banner");
console.log(bannerBox);
const playBanner = document.querySelector(".play");
const leftBanner = document.querySelector(".buttons img:first-child");
const rightBanner = document.querySelector(".buttons img:last-child");

//banner-slide

const makeClone = bannerBox.cloneNode(true);
makeClone.className = "bannerClone";
bannerWrap.appendChild(makeClone);
bannerBox.style.left = "0px";
makeClone.style.left = bannerBox.offsetWidth + 4 + "px";
bannerBox.classList.add("active");
makeClone.classList.add("active");

const playStop = () => {
  bannerBox.style.animationPlayState = "paused";
  makeClone.style.animationPlayState = "paused";
};
const rePlay = () => {
  bannerBox.style.animationPlayState = "running";
  makeClone.style.animationPlayState = "running";
};

bannerWrap.addEventListener("mouseenter", () => {
  playStop();
});
bannerWrap.addEventListener("mouseleave", () => {
  rePlay();
});

playBanner.addEventListener("click", (e) => {
  playBanner.classList.toggle("active");
  if (e.target.classList.length === 2) {
    playStop();
  } else {
    rePlay();
  }
});

leftBanner.addEventListener("click", () => {
  bannerBox.style.animationDirection = "normal";
  makeClone.style.animationDirection = "normal";
});
rightBanner.addEventListener("click", () => {
  bannerBox.style.animationDirection = "reverse";
  makeClone.style.animationDirection = "reverse";
});
