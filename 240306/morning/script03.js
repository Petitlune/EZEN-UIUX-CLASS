const button = document.querySelector("button");
const result = document.querySelector("#result");

//제너레이터함수 만들어줌
function* train() {
  yield "판교";
  yield "이메";
  yield "삼동";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "부발";
  yield "세종대왕릉";
}

const gyenggang = train();
console.log(gyenggang);

const trainChange = () => {
  console.log("click");
  let current = gyenggang.next();
  if (current.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = "종점!";
    button.setAttribute("disabled", "disabled");
  }
};

button.addEventListener("click", trainChange);
