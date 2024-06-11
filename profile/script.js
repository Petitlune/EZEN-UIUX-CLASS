//Portfolio color change
const body = document.querySelector("body");
const wrap = document.querySelector(".wrap");
const colorChangeList = document.querySelectorAll(".colors");
const colorTextChangeList = document.querySelectorAll(".colorstext");
const colorSet = document.querySelector(".color-setting");
const colorBox = document.querySelector(".color-select-box");
const colorBtn = document.querySelectorAll(".select-color");
//"ea1e63"
const colorArray = ["3f51b5", "00a73e", "ff9801", "222"];

colorSet.addEventListener("click", () => {
  colorBox.classList.toggle("active");
});

wrap.addEventListener("click", (e) => {
  if (e.target !== colorSet) {
    colorBox.classList.remove("active");
  }
});

colorBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    colorChangeList.forEach((item) => {
      item.style.background = `#${colorArray[i]}`;
      item.style.borderColor = `#${colorArray[i]}`;
    });
    colorTextChangeList.forEach((item) => {
      item.style.color = `#${colorArray[i]}`;
    });
    colorBox.classList.remove("active");
  });
});
//weather API
let weatherTem = document.querySelector(".temp");
let weatherImg = document.querySelector(".weatherImg");
let weatherDesc = document.querySelector(".weather-desc");
let kel;
let cel;

const weatherDescription = [
  {
    Clear: "맑음",
    Clouds: "구름 많음",
    Haze: "안개",
    Rain: "비 내림",
    Snow: "눈 내림",
  },
];

const weather = () => {
  const weatherAPI =
    " https://api.openweathermap.org/data/2.5/weather?lat=37.4966645&lon=127.0629804&appid=8831f40327d3a39171fe604f814e8560";
  fetch(weatherAPI)
    .then((res) => res.json())
    .then((data) => {
      let currentWeather = data.weather[0].main;
      kel = data.main.temp;
      cel = `${(kel - 273.15).toFixed(1)}℃`;
      weatherTem.innerText = cel;
      weatherImg.src = `./img/${data.weather[0].main}.png`;
      weatherDesc.innerText = weatherDescription[0][currentWeather];
    });
};
weather();
//home-section

const imageBg = document.querySelector(".images");
const images = document.querySelectorAll(".image");
const imageMoveBox = document.querySelector(".profile");
let profileWidth = document.querySelector(".profile").offsetWidth;
let titleWidth = document.querySelector(".title").offsetWidth;
let marginLeft = (window.innerWidth - titleWidth - profileWidth) / 2;
let globalIndex = 0;
let last = { x: 0, y: 0 };
let isThrottled = false;

const activate = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.zIndex = globalIndex;
  image.dataset.status = "active";
  last = { x, y };
};

const handleOnMove = (e) => {
  if (isThrottled) return;
  isThrottled = true;
  const lead = images[globalIndex % images.length];
  activate(
    lead,
    e.clientX - marginLeft - titleWidth,
    e.clientY - imageMoveBox.offsetTop
  );
  if (lead.dataset.index === images.length - 1) {
    globalIndex = 0;
  } else {
    globalIndex++;
  }

  imageBg.style.background = "rgba(0,0,0,0.3)";
  setTimeout(() => {
    isThrottled = false;
  }, 100);
};

const inactivate = () => {
  images.forEach((image) => {
    image.dataset.status = "inactive";
  });
  imageBg.style.background = "rgba(0,0,0,0)";
};
const addImageEvent = () => {
  imageMoveBox.addEventListener("mousemove", handleOnMove);
};

const updateDimensions = () => {
  profileWidth = document.querySelector(".profile").offsetWidth;
  titleWidth = document.querySelector(".title").offsetWidth;
  marginLeft = (window.innerWidth - titleWidth - profileWidth) / 2;
};

window.addEventListener("resize", updateDimensions);
imageMoveBox.addEventListener("mouseenter", addImageEvent);
imageMoveBox.addEventListener("mouseleave", inactivate);
//skill-section
const dewDrop = document.querySelector(".ani-dew");
const skillDescription = document.querySelectorAll(".skill-desc");

dewDrop.addEventListener("click", () => {
  dewDrop.classList.toggle("active");
  skillDescription.forEach((item) => {
    item.classList.toggle("active");
  });
});

//project-section
const modalList = document.querySelectorAll(".modalList");
const projectSection = document.querySelector(".project");
const modalScreen = document.querySelectorAll(".modalScreen");
const modalCloseBtn = document.querySelectorAll(".modalCloseBtn");
const modalBg = document.querySelectorAll(".modalback");

modalList.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalScreen[i].style.display = "flex";
    modalBg[i].style.display = "flex";
    body.style.overflowY = "hidden";
  });
  modalCloseBtn[i].addEventListener("click", () => {
    modalScreen[i].style.display = "none";
    modalBg[i].style.display = "none";
    body.style.overflowY = "auto";
  });
});

// example-section
const exList = document.querySelectorAll(".ex-menu li span");
const exContents = document.querySelectorAll(".ex-box-wrap");

exList.forEach((li, i) => {
  li.addEventListener("click", () => {
    exList.forEach((li, j) => {
      li.classList.remove("active");
      exContents[j].classList.remove("active");
    });

    li.classList.add("active");
    exContents[i].classList.add("active");
  });
});

//scrollTo event
const navMenu = document.querySelectorAll(".gnb li");
const sections = document.querySelectorAll(".section");
const goToTop = document.querySelector(".gotoTop");

navMenu.forEach((menu, i) => {
  menu.addEventListener("click", () => {
    window.scrollTo({
      top: sections[i].offsetTop - 60,
      behavior: "smooth",
    });
  });
});

goToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const iframURL = [
  "https://flex-hompage-petit.web.app",
  "https://grid-hompage-petit.web.app",
  "https://css-project02-petit.web.app",
  "https://calendar-petit.web.app",
  "https://accordion-ui-petit.web.app",
  "https://filter-petit.web.app",
  "https://loginform-petit.web.app",
  "https://matching-member-petit.web.app",
  "https://mobile-wedding-petit.web.app",
  "https://react-shoppingmall-petit.web.app",
];

const examModal = document.querySelectorAll(".ex-box-wrap li");
const modalFull = document.querySelector(".modal-full");
const modalClose = document.querySelector(" .modal-close-btn ");
const modalView = document.querySelector("#my-modal iframe");

examModal.forEach((exam, i) => {
  exam.addEventListener("click", () => {
    modalFull.style.display = "flex";
    modalView.src = iframURL[i];
    body.style.overflowY = "hidden";
  });
});

modalClose.addEventListener("click", () => {
  modalFull.style.display = "none";
  body.style.overflowY = "auto";
});
