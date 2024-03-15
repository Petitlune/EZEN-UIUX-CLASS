//Game<1 : 끝말잇기 게임>

//끝난 단어가 무엇인지 찾아오기
//input 태그에 입력한 단어 찾아오기

const search = document.querySelector(".word_text form");

const gameStart = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myWord = document.querySelector("#myword").value;
  let lastWord = word[word.length - 1];
  let firstWord = myWord[0];
  console.log(lastWord, firstWord);
  if (lastWord === firstWord) {
    // const result = document.querySelector("#result");
    // result.innerText = "정답!";
    document.querySelector("#result").innerText = "정답!";
    document.querySelector("#word").innerText = myWord;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "실패!";
    document.querySelector("#myword").value = "";
  }
};
search.addEventListener("submit", gameStart);

//비동기 방식으로 자바스크립트를 실행시키게 되었을 떄 ===> addEventListener 안에 매개변수를 받아야하는 콜백함수가 있는 경우 이와 같이("click", gameStart); 함수를 써주면 안됨. 그때는 ("click",()=> gameStart(n)); 이렇게 써주어야함.

//Game<2 : 로또 게임>

const btn = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");
console.log("click");

const luckyNum = {
  digitCount: 6,
  maxNumber: 45,
};
const startLotto = () => {
  const { digitCount, maxNumber } = luckyNum;
  let myNumber = new Set(); //Set()이라는 인스턴스 생성
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    //set함수에서 값을 추가할 때 add
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`; //새로운 배열을 전개연산자로 만듦
  } else {
    result.innerText = `재추첨하겠습니다.`;
  }
};

btn.addEventListener("click", startLotto);
