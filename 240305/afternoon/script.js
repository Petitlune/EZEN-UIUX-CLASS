const player = document.querySelector(".player");
const playButton = document.querySelector(".play-pause");

console.log(playButton);
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");
const rateButtons = document.querySelectorAll(".rate");
//전역요소로 프로그래스바 너비를 가져온다. 서클움직이기 위해\
const progressCover = document.querySelector(".progress");

const videoPoint = (e) => {
  const mouseX = e.pageX - player.offsetLeft; //pageX는 내가 보고있는 웹브라우저의 X값 따라서 웹브라우저부터 영상이 얼마만큼 떨어져있는지 알고 두 값을 빼주면 시작점이 0이 됨
  // console.log(mouseX);
  const width = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / width) * duration;
  video.currentTime = clickedTime;
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  //circle 정의하기
  const progressPointer = document.querySelector(".circle");
  //영상의 총길이
  const duration = video.duration;
  const currentTime = video.currentTime;
  //퍼센테이트에 따른 프로그래스바 너비 조절하기!
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  //progress전체 길이 찾기(clientWidth속성 사용)
  const progressBarWidth = progressCover.clientWidth;
  //프로그래스바 600px = 100% 영상재생 구간 => 영상시간대비 / 총 영상 시간 * 전체총길이
  console.log(progressBarWidth);
  const newPosition = (currentTime / duration) * progressBarWidth - 1;
  progressPointer.style.left = `${newPosition}px`;
};

const setRate = (e) => {
  console.log(e);
  //구조분해할당
  const { rate } = e.target.dataset;
  // const rate = e.target.dataset.rate;
  video.playbackRate = rate;
};

const formatting = (time) => {
  const sec = Math.floor(time % 60);
  const min = Math.floor(time / 60);
  const hour = Math.floor(time / 3600);

  // 삼항조건연산자로 한자리수일때 앞에 0붙이기
  const fSec = sec < 10 ? `0${sec}` : sec;
  const fMin = min < 10 ? `0${min}` : min;
  const fHour = hour < 10 ? `0${hour}` : hour;

  return `${fHour}:${fMin}:${fSec}`;
};

const updateTime = () => {
  //currenttime 과 duration 라는 속성은 이벤트가 없어도 찾아올 수 있음.
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");
  //formatting이라는 함수 정의해서 시 분 초로 나오게끔 만들어주기
  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const setVolume = (e) => {
  video.volume = e.target.value;
  console.log(e);
};

const play = () => {
  video.play();
  playButton.innerText = "| |";
};
const pause = () => {
  video.pause();
  playButton.innerText = "▶";
};
const togglePlay = () => {
  //삼항조건연산자
  video.paused ? play() : pause();
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
//프로그래스바
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
//배열 안에 어떤 값을 하나씩 끄집어내서 함수를 실행시킬때 forEach문 사용
rateButtons.forEach((button) => {
  button.addEventListener("click", setRate);
});
//클릭한 포인트로 비디오 이동
progressCover.addEventListener("click", videoPoint);
