// 동영상 재생 버튼 동작
const button = document.querySelector("button");

const togglePlay = () => {
  const viedo = document.querySelector("video");
  //비디오를 정지시키는 함수
  // viedo.pause();
  if (viedo.paused) {
    button.innerText = "Pause";
    viedo.play();
  } else {
    viedo.pause();
    button.innerText = "Play";
  }
};
button.addEventListener("click", togglePlay);
