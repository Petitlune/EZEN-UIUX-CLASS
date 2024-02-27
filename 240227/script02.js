const buttons = document.querySelectorAll("button");
//buttons는 유사배열이기 때문에 배열함수 쓸 수 있지만 완벽하게 사용은 안된다.
const comChoice = document.querySelector(".com-choice");
const userChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result");
const result = ["가위", "바위", "보"];

const show = (user, com, message) => {
  userChoice.innerText = user;
  comChoice.innerText = com;
  winner.innerText = message;
};
const game = (user, com) => {
  if (user === com) {
    message = "무승부";
    //message는 block스코프 ==> 절대 밖으로 끄집어 낼 수 없다 .값을 밖으로 못 꺼내옴. => if문 밖으로는 못 꺼냄
  } else {
    switch (user + com) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자승리";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리";
        break;
    }
  }
  show(user, com, message);
};
const play = (e) => {
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const com = result[randomIndex];
  game(user, com);
};
buttons.forEach((button) => {
  button.addEventListener("click", play);
});

console.log(buttons);
