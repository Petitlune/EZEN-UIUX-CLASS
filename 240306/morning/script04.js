//반드시 여섯개의 숫자가 나와야함.
//중복되면 안됨(Set함수 사용).
//여섯개의 숫자가 최대 45까지만 가능
// (1~45까지 랜덤으로 나와야함.) *6 (6번 반복 : 반복문) ==> 이결과 값을 Set()이라는 인스턴스 객체화 => result 공간으로 출력
const button = document.querySelector("button");
const result = document.querySelector("#result");

// const lottoNum = () => {
//   console.log("click");
//   let i =0;
//   for(i =0, i < 6; i++) {
//     const randomNum = Math.floor(Math.random() * 45 + 1);
//     console.log(randomNum);
//     const resultList = new Set();
//     resultList.add(`${randomNum}`);
//     console.log(resultList);
//   }
// };

const luckyNum = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoNum = () => {
  const { digitCount, maxNumber } = luckyNum; //구조분해 할당 쓰임
  const resultList = new Set(); // set 객체
  for (let i = 0; i < digitCount; i++) {
    resultList.add(Math.floor(Math.random() * maxNumber) + 1); // 반복문
  }
  if (resultList.size !== 6) {
    for (let i = 0; i < digitCount; i++) {
      resultList.add(Math.floor(Math.random() * maxNumber) + 1); // 5개가 나오는걸 방지해서 조건문 안에 반복문 한번 더 돌림
    }
  } else {
    result.innerText = `${[...resultList]}`;
  }
  console.log(resultList);
};
button.addEventListener("click", lottoNum);
