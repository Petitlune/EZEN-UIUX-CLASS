const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".button");
const hexNumber = document.querySelector("#hexColor");

function getRandomHex() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += colors[getRandomHex()];
  }

  hexNumber.innerText = hex;
  document.body.style.backgroundColor = hex;
});
