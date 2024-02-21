//사용자 키 정의, 몸무게 정의, 계산 버튼  result 정의
// BMI 계산 함수
// 연산 변수명 할당
// 함수 조건문 연산작업
// div innerText로 계산된 값 출력

const calc = document.querySelector("input[type='submit']");

// const form = document.querySelector("form");

const calculate = (weight, height) => {
  return (weight / (height * height)).toFixed(1);
};
const display = (bmi) => {
  const result = document.querySelector(".result");
  let group;
  if (bmi >= 30.0) {
    group = "중등도 비만";
  } else if (bmi >= 25.0) {
    group = "경도 비만";
  } else if (bmi >= 23.0) {
    group = "과체중";
  } else if (bmi >= 18.5) {
    group = "적정 체중";
  } else {
    group = "저체중";
  }
  result.innerText = `${bmi} -> ${group}입니다.`;
};

const formhandler = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");

  //예외조항 처리
  if (weightInput.value !== "" && heightInput.value !== "") {
    const height = heightInput.value / 100;
    const weight = weightInput.value;
    //--밑에 함수가 길어서 밖으로 꺼내줌
    // const bmiFnc = () => {
    //   return (weight / (height * height)).toFixed(1);
    // };
    const bmi = calculate(weight, height);
    //함수 호출
    // console.log(bmi);
    display(bmi);
    heightInput.value = "";
    weightInput.value = "";
  }
};

calc.onclick = formhandler;

//어딘가에 담아야한다는 것은 변수가 필요하다는 의미
