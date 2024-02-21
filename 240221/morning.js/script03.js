// 첫번째 수에 들어가는 값 정의
// 두번째 수에 들어가는 값 정의

// 두 수의 최대 공약수 구하는 식

// submit에 대한 정의

// result에 대한 정의

//----------해답
//1. 사용자가 입력한 두개의 숫자를 찾아온다.
//2. 출력될 공간을 정의
//3. 계산하기 버튼을 클릭시 result 공간에 값을 출력해준다.
//4. 값을 출력하기 위한 연산작업 필요(함수)

const firstNum = document.querySelector("#number1");

const secondNum = document.querySelector("#number2");

const result = document.querySelector("#result");
// const btn = document.querySelector("#clac");
const btn = document.querySelector("form input[type='submit']");
console.log(btn);

const getGCD = (firstNum, secondNum) => {
  const max = firstNum > secondNum ? firstNum : secondNum; //삼항조건 연산자로 상대적으로 둘 중에 더 큰 숫자를 찾아줌
  //나누어지는 가장 큰 숫자를 넣어본다.
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      GCD = i;
    }
  }
  //함수의 값을 바깥으로 꺼내기 위해 return문 사용
  return GCD;
};
btn.onclick = function (e) {
  e.preventDefault();
  result.innerText = getGCD(firstNum.value, secondNum.value);
};
