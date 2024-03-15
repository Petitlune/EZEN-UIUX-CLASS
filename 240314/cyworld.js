const menuHome = document.querySelector("#home");
const menuGame = document.querySelector("#game");
const menuMusic = document.querySelector("#music");
const Frame = document.querySelector("#contentFrame");

const homeChange = () => {
  Frame.setAttribute("src", "./home.html");
  menuHome.style = "color: #000; background: #fff;";
  menuGame.style = "color: #fff; background: #298eb5;";
  menuMusic.style = "color: #fff; background: #298eb5;";
};
const gameChange = () => {
  Frame.setAttribute("src", "./game.html");
  menuGame.style = "color: #000; background: #fff;";
  menuMusic.style = "color: #fff; background: #298eb5;";
  menuHome.style = "color: #fff; background: #298eb5;";
};

const musicChange = () => {
  Frame.setAttribute("src", "./music.html");
  menuMusic.style = "color: #000; background: #fff;";
  menuHome.style = "color: #fff; background: #298eb5;";
  menuGame.style = "color: #fff; background: #298eb5;";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuMusic.addEventListener("click", musicChange);
