const spinner = document.querySelector("img");
const checkBtn = document.querySelector("input");
const checkLabel = document.querySelector("label");
const currentTime = document.querySelector("#currentTime");

const getTime = () => {
  const now = new Date();
  let hour = now.getHours();
  if (hour > 12) {
    hour = `오후 ${hour - 12}`;
  }

  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  currentTime.innerText = `${hour} : ${minutes} : ${seconds}`;
};

checkBtn.addEventListener("click", (e) => {
  if (e.target.checked === true) {
    spinner.style.animationPlayState = "paused";
    getTime();
  } else {
    spinner.style.animationPlayState = "running";
    currentTime.innerText = "";
  }
});
