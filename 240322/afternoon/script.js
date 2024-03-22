const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const audios = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

//각 아티클의 각도
const deg = 45;
// 뮤직 패널 인덱스 값을 정의
let i = 0;
const len = lists.length - 1;

//프레임 내 뮤직패널 이동 인덱스 값 정의
let num = 0;

//프레임 내 뮤직패널 스타일 변경 값 정의
let active = 0;

lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(./musicimg/member${i + 1}.jpg)`;
  i++;

  const pause = list.querySelector(".pause");
  const play = list.querySelector(".play");
  const load = list.querySelector(".loading");
  play.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
  });
  load.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  });
});
const activation = (active, lists) => {
  lists.forEach((list) => {
    list.classList.remove("on");
  });
  lists[active].classList.add("on");
};

const initMusic = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.load();
    audio.parentElement.previousSibling.classList.remove("on");
  });
};

prev.addEventListener("click", () => {
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;
  active === 0 ? (active = len) : active--;
  activation(active, lists);
  initMusic();
});
next.addEventListener("click", () => {
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;
  active === len ? (active = 0) : active++;
  activation(active, lists);
  initMusic();
});
